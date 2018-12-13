const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map'
})
