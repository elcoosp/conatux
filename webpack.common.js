const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const appPath = (...pathToFile) =>
  path.resolve(__dirname, 'packages', 'front', 'app', ...pathToFile)

const output = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name]/bundle.js'
}

const rules = [
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader']
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader']
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      rootMode: 'upward',
      presets: ['@babel/react']
    }
  }
]

const plugins = [
  new HtmlWebpackPlugin({
    template: appPath('public', 'index.html')
  })
]
const resolve = {
  alias: {
    '@:': appPath('src')
  }
}
module.exports = {
  entry: appPath('src', 'index.js'),
  output,
  module: { rules },
  plugins,
  resolve
}
