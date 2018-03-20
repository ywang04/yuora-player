/*
 * @Author: Yang 
 * @Date: 2018-03-10 15:29:31 
 * @Last Modified by: Yang
 * @Last Modified time: 2018-03-18 17:37:52
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/app.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      page: path.resolve(__dirname, 'src/page'),
      components: path.resolve(__dirname, 'src/components'),
      config: path.resolve(__dirname, 'src/config')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    // html
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}