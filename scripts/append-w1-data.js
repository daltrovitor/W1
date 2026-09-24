// Hello World
const fs = require('fs');
const path = require('path');

const w1Data = JSON.parse(fs.readFileSync(path.join(__dirname, '../app/data/w1_generated_data.json'), 'utf8'));
const existingCode = fs.readFileSync(path.join(__dirname, '../app/data/logoPartsData.ts'), 'utf8');

if (!existingCode.includes('export const W1_LOGO_DATA')) {
  const w1Export = `
export const W1_LOGO_DATA: BrandLogoData = ${JSON.stringify(w1Data, null, 2)};
`;
  fs.writeFileSync(path.join(__dirname, '../app/data/logoPartsData.ts'), existingCode.trimEnd() + '\n' + w1Export);
  console.log('Added W1_LOGO_DATA successfully!');
} else {
  console.log('W1_LOGO_DATA already exists.');
}
