const common = {
  presets: ['@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-optional-chaining']
}
const test = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'last 2 Chrome versions'
      }
    ],
    ...common.presets
  ],
  plugins: ['react-hot-loader/babel', ...common.plugins]
}

const production = {
  presets: [
    [
      '@babel/preset-env',
      {
        shippedProposals: true,
        targets: {
          browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
        }
      }
    ],
    ...common.presets
  ],
  ignore: ['**/__tests__'],
  plugins: [...common.plugins]
}

module.exports = api => {
  api.cache(true)
  return { env: { test, production } }
}
