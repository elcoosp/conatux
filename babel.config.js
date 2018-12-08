
const test = {
  presets: [
    [
      '@babel/preset-env',
      {
        'targets': 'last 2 Chrome versions'
      }
    ]
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
    ]
  ],
  'ignore': [
    '**/__tests__'
  ]
}

module.exports = { env: { test, production } }
