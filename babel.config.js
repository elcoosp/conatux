const presets = [
  [
    '@babel/env',
    {
      'shippedProposals': true,
      'targets': {
        'browsers': [
          'last 2 versions'
        ]
      }
    }
  ]
]

const options = {
  'ignore': [
    '**/__tests__'
  ]
}

module.exports = { presets, ...options }
