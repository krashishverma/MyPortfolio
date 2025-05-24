const fs = require('fs');
const path = require('path');

// Directories and files to create
const files = [
  {
    path: 'public/images/background.png',
    content: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64') // 1x1 transparent PNG
  },
  {
    path: 'public/fonts/Cascadia.ttf',
    // We'll just create an empty file as a placeholder
    content: Buffer.from('')
  },
  {
    path: 'public/fonts/Circular-Light.otf',
    content: Buffer.from('')
  },
  {
    path: 'public/fonts/Circular-Book.otf',
    content: Buffer.from('')
  },
  {
    path: 'public/fonts/Circular-Medium.otf',
    content: Buffer.from('')
  },
  {
    path: 'public/fonts/Circular-Bold.otf',
    content: Buffer.from('')
  },
  {
    path: 'public/projects/jobify.png',
    content: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64') // 1x1 transparent PNG
  }
];

// Create files
files.forEach(file => {
  const fullPath = path.join(process.cwd(), file.path);
  const dir = path.dirname(fullPath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
  
  // Create file if it doesn't exist
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, file.content);
    console.log(`Created file: ${file.path}`);
  } else {
    console.log(`File already exists: ${file.path}`);
  }
});

console.log('Placeholder files created successfully!');