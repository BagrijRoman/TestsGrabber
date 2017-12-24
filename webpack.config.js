/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src/client');
const RESOURSES_DIR_NAME = 'resources';
const RESOURSES_DIR_PATH = path.join(__dirname, RESOURSES_DIR_NAME);
const INDEX_PAGE = path.resolve(__dirname, 'src/client/index.html');
const DEV_SERVER_PORT = 8000;

const config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(sass|scss)$/,
        loaders: ["style-loader","css-loader","sass-loader"]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: RESOURSES_DIR_PATH,
      to: RESOURSES_DIR_NAME,
    }]),
    new HtmlWebpackPlugin({
      template: INDEX_PAGE,
      hash: true
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${DEV_SERVER_PORT}`,
    })
  ],
  devServer: {
    contentBase: BUILD_DIR,
    port: DEV_SERVER_PORT,

  },
};

module.exports = config;
