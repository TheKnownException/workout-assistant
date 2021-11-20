const { name } = require('./package.json')

module.exports = {
  clearMocks: true,
  testEnvironment: 'node',
  testMatch: ['**/*.spec.js'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  displayName: name,
  name,
  transform: { '^.+\\.(js|jsx)$': 'babel-jest' }
}
