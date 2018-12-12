const webpack = require('@cypress/webpack-preprocessor')
module.exports = on => {
  const options = {
    webpackOptions: require('../../webpack.dev.js'),
    watchOptions: {}
  }

  on('file:preprocessor', webpack(options))
}
