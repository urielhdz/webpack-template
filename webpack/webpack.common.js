const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const path = require('path');

const htmlWebpack = new HtmlWebpackPlugin({
  template: './assets/index.template.html',
  filename: 'index.html'
});

module.exports = {
  entry: "./assets/javascript/entry.js",
  output: {
    publicPath: '/',
    path: path.join(__dirname,'..'),
    filename: "dist/javascript/bundle.js"
  },
  plugins: [htmlWebpack,new HtmlWebpackHarddiskPlugin()],
  module:{
    rules:[
      { test: /\.svg$/,
        loader: 'url-loader'
      }
    ]
  }
};
