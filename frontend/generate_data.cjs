const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'products');
const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));

const extractedNames = require('./extracted_names.json');

const products = files.map((file, index) => {
    let rawName = extractedNames[file] || `Product ${index + 1}`;
    
    // Clean up Tesseract OCR glitches
    let name = rawName
      .replace(/Oraanic/ig, 'Organic')
      .replace(/Turmaric/ig, 'Turmeric')
      .replace(/rh/ig, '')
      .replace(/Product \d+/ig, '')
      .trim();

    if (!name || name.length < 3) {
      name = `Premium Indian Export ${index+1}`;
    }

    // Capitalize properly
    name = name.replace(/\b\w/g, c => c.toUpperCase());
    
    return {
        id: index + 1,
        name: name,
        image: `/products/${file}`,
        pricePerGram: Number((Math.random() * 2 + 0.5).toFixed(2)),
        description: `Premium export quality ${name}. Ethically sourced and strictly graded for international standards. Perfect for commercial trade and high-end consumers.`
    };
});

fs.writeFileSync(path.join(__dirname, 'src', 'data.js'), `export const products = ${JSON.stringify(products, null, 4)};`);
console.log("data.js successfully generated with true OCR names!");
