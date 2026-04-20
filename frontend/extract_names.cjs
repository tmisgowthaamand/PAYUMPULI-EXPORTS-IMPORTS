const fs = require('fs');
const path = require('path');
const Tesseract = require('tesseract.js');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'public', 'new_products');
const outputDataFile = path.join(__dirname, 'extracted_names.json');

async function processAll() {
  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));
  const namesMap = {};
  
  // We'll create a worker pool to speed it up. But for simplicity, we'll process sequentially
  // and just crop the top 20% to read the text faster.
  
  console.log(`Processing ${files.length} files...`);
  
  for (const [index, file] of files.entries()) {
    const inputPath = path.join(inputDir, file);
    try {
      const metadata = await sharp(inputPath).metadata();
      // Crop top 20%
      const topImgBuffer = await sharp(inputPath)
        .extract({ left: 0, top: 0, width: metadata.width, height: Math.round(metadata.height * 0.25) })
        .toBuffer();
        
      const result = await Tesseract.recognize(topImgBuffer, 'eng');
      let text = result.data.text.trim().replace(/\n/g, ' ');
      // Clean up text
      text = text.replace(/[^a-zA-Z\s]/g, '').trim();
      if (!text || text.length < 3) {
        text = `Product ${index + 1}`;
      }
      
      namesMap[file] = text;
      console.log(`Extracted ${index+1}/${files.length}: ${file} -> ${text}`);
    } catch (e) {
      console.log(`Failed on ${file}: ${e.message}`);
      namesMap[file] = `Product ${index + 1}`;
    }
  }
  
  fs.writeFileSync(outputDataFile, JSON.stringify(namesMap, null, 2));
  console.log('Finished extraction.');
}

processAll();
