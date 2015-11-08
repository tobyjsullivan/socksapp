'use strict';

var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./init-data');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: {
    javascript: './entry.jsx',
    html: "./index.html"
  },

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.html$/, loader: "file?name=[name].[ext]" }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
