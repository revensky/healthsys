import { readFileSync } from 'fs';
import path from 'path';

const swcJestConfig = JSON.parse(readFileSync(path.join(__dirname, '.spec.swcrc'), 'utf-8'));

swcJestConfig.swcrc = false;

export default {
  displayName: '@healthsys/healthsys',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['@swc/jest', swcJestConfig],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: 'test-output/jest/coverage',
};
