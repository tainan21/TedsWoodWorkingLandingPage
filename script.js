const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname);
const outputFile = path.join(rootDir, 'fileTree.txt');

function generateFileTree(dir, prefix = '') {
  let result = '';
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (item.name === 'node_modules' || item.name.startsWith('.')) continue;

    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      result += `${prefix}--${item.name}\n`;
      result += generateFileTree(fullPath, `${prefix}  `);
    } else if (item.isFile()) {
      result += `${prefix}-${item.name}\n`;
    }
  }

  return result;
}

const fileTree = generateFileTree(rootDir);

// Write the result to a .txt file
fs.writeFileSync(outputFile, fileTree, 'utf8');
console.log(`File tree exported to ${outputFile}`);