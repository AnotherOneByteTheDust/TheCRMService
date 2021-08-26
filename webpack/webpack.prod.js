const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv').config({ path: path.join(__dirname, '../env/.env') })
const common = require('./webpack.common.js')

if (!dotenv.path) {
  console.log('[\x1b[31mERROR\x1b[37m] .env file does not exist in env folder.')
  process.exit(1)
}

module.exports = merge(common, {
  output: {
    filename: 'thecrmservice-prod.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, './tsconfig.webpack.json')
            }
          }
        ]
      }
    ]
  },
  mode: 'production',
  entry: [path.join(__dirname, '../src/app.ts')],
  node: {
    __dirname: false,
    __filename: false
  },
  optimization: {
    usedExports: true
  },
  externals: [nodeExternals({})],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed)
    }),
    new CleanWebpackPlugin()
  ]
})
