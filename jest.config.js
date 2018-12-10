module.exports = {
  name: 'conatux',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@:(.*)$': '<rootDir>/packages/front/app/src$1'
  }
}
