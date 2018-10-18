const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// use this to move css to own file
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app:'./src/index.js'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: "./webpackTemplates/index.html",
      filename: "./index.html"
    })
  ],
  module: {
      rules: [
          // {
          //   test: /\.css$/,
          //   use: ExtractTextPlugin.extract({
          //     use: [
          //       {
          //         loader: 'style-loader'
          //       },
          //       {
          //         loader: ExtractTextPlugin.extract('css-loader'),
          //         query: {
          //           modules: true,
          //           localIdentName: '[name]__[local]___[hash:base64:5]'
          //         }
          //       }
          //     ]
          //   })
          // },
          {
            test: /\.css$/,
            loader: 'style-loader'
          },
          {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            test: /\.jsx$/,
            use: [
              'babel-loader'
            ]
          },
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [
              'babel-loader'
            ]
          }
      ]
  }
}

