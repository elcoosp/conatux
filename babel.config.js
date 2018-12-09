
const test = {
  presets: [
    [
      '@babel/preset-env',
      {
        'targets': 'last 2 Chrome versions'
      }
    ],
    '@babel/preset-react'

  ]
}

const production = {
  presets: [
    [
      '@babel/preset-env',
      {
        'shippedProposals': true,
        'targets': {
          'browsers': [
            '>0.25%',
            'not ie 11',
            'not op_mini all'
          ]
        }
      }
    ],
    '@babel/preset-react'

  ],
  'ignore': [
    '**/__tests__'
  ]
}

module.exports = (api) => {
  api.cache(true)
  return { env: { test, production } }
}
