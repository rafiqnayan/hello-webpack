const path = require('path');

module.exports = {
  entry: './src/js/myfile.js',
  output: {
    filename: 'myfile.min.js',
    path: path.resolve(__dirname, 'dist/js')
  }
};