module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  preset: 'jest-playwright-preset',
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/e2e/setupTests.ts'],
  roots: ['<rootDir>/e2e'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/e2e/tsconfig.json',
    },
  },
}
