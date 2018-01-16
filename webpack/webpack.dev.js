const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader','css-loader','sass-loader' ]
    },
    {
      test: /\.html$/,
      use: [ {
        loader: 'html-loader', options: { minimize: true,attrs: false } }
      ],
    }]
  }
});
