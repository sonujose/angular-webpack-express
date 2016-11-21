var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: {
    'vendor': './client/vendor.js',
    'app': ['./client/app/components/modules.js','./client/app/shared/modules.js','./client/app/shared/header/headerDirective.js',
      './client/app/app.modules.js','./client/app/routes.js','./client/app/dataService.js',
      './client/app/components/about/aboutController.js', './client/app/components/home/homeController.js']
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
      { test: /\.(html|css)$/, loader: 'raw-loader' }
      //{ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
