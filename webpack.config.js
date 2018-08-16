const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build/www/');
const APP_DIR = path.resolve(__dirname, 'src_js/');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'React Java Thrift Example',
  inject: true,
});


const config = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  entry: {
    index: path.resolve(APP_DIR, 'index.tsx'),
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'build/www/assets/',
        },
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
};

module.exports = config;
