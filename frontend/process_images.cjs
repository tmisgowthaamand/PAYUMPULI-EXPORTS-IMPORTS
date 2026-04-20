const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'products');
const outputDir = path.join(__dirname, 'public', 'products', 'cropped');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function processImages() {
    const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);
        
        try {
            const metadata = await sharp(inputPath).metadata();
            
            // Extract proportions: top 15%, height 55%
            const top = Math.round(metadata.height * 0.15);
            const left = 0;
            const width = metadata.width;
            const height = Math.round(metadata.height * 0.55);

            await sharp(inputPath)
                .extract({ left, top, width, height })
                .toFile(outputPath);
                
            console.log(`Processed: ${file}`);
        } catch (error) {
            console.error(`Error processing ${file}:`, error);
        }
    }
}

processImages();
