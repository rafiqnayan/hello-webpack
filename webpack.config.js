const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    myfile: ['./src/js/myfile.js', './src/js/myfile2.js'],
    home: './src/js/home.js'
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
};