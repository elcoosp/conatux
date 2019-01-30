module.exports = {
  name: 'conatux',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  rootDir: './',
  moduleNameMapper: {
    '^@:(.*)$': '<rootDir>/packages/front/app/src$1'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  setupFiles: ['./setupJest.js', 'jest-localstorage-mock'],
  setupTestFrameworkScriptFile: 'jest-enzyme',
  testEnvironment: 'enzyme'
}
