import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// @ts-expect-error Import Meta is used willingly
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const swcJestConfig = JSON.parse(readFileSync(path.join(__dirname, '.spec.swcrc'), 'utf-8'));

swcJestConfig.swcrc = false;

export default {
  displayName: '@healthsys/healthsys-e2e',
  preset: '../../jest.preset.js',
  globalSetup: '<rootDir>/src/support/global-setup.ts',
  globalTeardown: '<rootDir>/src/support/global-teardown.ts',
  setupFiles: ['<rootDir>/src/support/test-setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['@swc/jest', swcJestConfig],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: 'test-output/jest/coverage',
};
