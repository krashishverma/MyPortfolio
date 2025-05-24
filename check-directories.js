const fs = require('fs');
const path = require('path');

// Directories to check/create
const directories = [
  'public/fonts',
  'public/images',
  'public/projects'
];

// Check and create directories
directories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    console.log(`Creating directory: ${dir}`);
    fs.mkdirSync(fullPath, { recursive: true });
  } else {
    console.log(`Directory exists: ${dir}`);
  }
});

// List files in each directory
directories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  console.log(`\nFiles in ${dir}:`);
  try {
    const files = fs.readdirSync(fullPath);
    if (files.length === 0) {
      console.log('  (empty)');
    } else {
      files.forEach(file => console.log(`  ${file}`));
    }
  } catch (err) {
    console.error(`Error reading directory: ${err.message}`);
  }
});