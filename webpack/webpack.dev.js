const NodemonPlugin = require('nodemon-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv').config({ path: path.join(__dirname, '../env/.env.dev') })
const common = require('./webpack.common.js')

module.exports = merge(common, {
  output: {
    filename: 'thecrmservice-dev.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader' }]
      }
    ]
  },
  devtool: 'inline-source-map',
  entry: [path.join(__dirname, '../src/app.ts')],
  externals: [nodeExternals()],
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed)
    }),
    new NodemonPlugin({
      watch: path.join(__dirname, '../dist'),
      verbose: true,
      ext: 'ts,js'
    })
  ],
  watch: true
})
