//jest.config.js
// setupFilesAfterEnv: ['<rootDir>/jest.setup.js']; // this is commented out in the above code
const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};
module.exports = createJestConfig(customJestConfig);
