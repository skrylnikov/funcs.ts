module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  testMatch: [
    '**/src/**/__tests__/*.+(ts|tsx)',
  ],

  coveragePathIgnorePatterns: [
    'index.ts',
  ],
  coverageDirectory: './tmp/coverage',
  coverageReporters: ['text-summary', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  }
};