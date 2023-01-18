const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../extensions/trackshoppers/assets'),
  },
  devServer: {
    static: '../extensions/trackshoppers/assets',
    hot: true,
    devMiddleware: {
        writeToDisk: (filePath) => {
            return !/hot-update/i.test(filePath); // you can change it to whatever you need
          },
      },
  },
  devtool: 'inline-source-map', // mode === 'development' ? 'inline-source-map' : false,
  mode: 'development'
};