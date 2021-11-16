module.exports = {
  clearMocks: true,
  //preset: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
  projects: ['<rootDir>/packages/*/jest.config.js'],
  testEnvironment: 'node',
  testMatch: ['*.spec.js', '*.spec.jsx']
}
