const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'sourcemap',
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
})
