const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9889
  }
};
