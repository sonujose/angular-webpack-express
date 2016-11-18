var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: {
    'vendor': './client/vendor.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  output: {
    path: './client/webpack-build',
    filename: '[name].bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader'}
    ],
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] },
      { test: /\.(html|css)$/, loader: 'raw-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
