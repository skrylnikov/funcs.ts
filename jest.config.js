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
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  }
};