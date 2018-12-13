module.exports = {
  name: 'conatux',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  rootDir: './',
  moduleNameMapper: {
    '^@:(.*)$': '<rootDir>/packages/front/app/src$1'
  },
  setupTestFrameworkScriptFile: '<rootDir>/front/app/setupEnzyme.js',
  snapshotSerializers: ['enzyme-to-json/serializer']
}
