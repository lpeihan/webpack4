'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.resolve = function (dir = '') {
  return path.join(__dirname, '..', dir);
};

exports.assetsPath = function (_path) {
  return path.posix.join('static', _path);
};

exports.cssLoader = function (loader) {
  const loaders = [
    {
      loader: 'css-loader'
    },
    {
      loader: 'postcss-loader'
    }
  ];

  if (loader) {
    loaders.push({
      loader: `${loader}-loader`
    });
  }

  const styleLoader =
    process.env.NODE_ENV === 'development'
      ? 'vue-style-loader'
      : MiniCssExtractPlugin.loader;

  return [styleLoader].concat(loaders);
};
