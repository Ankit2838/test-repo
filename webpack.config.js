const path = require('path');

module.exports = {
  entry: './index.js', // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder
    filename: 'bundle.js', // Output file
  },
  mode: 'production', // Set to 'development' for development mode
  target: 'node', // Set for Node.js environment
};
