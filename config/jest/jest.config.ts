import type { Config } from 'jest';
import path from 'node:path';

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>src'],
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTest.ts'],
  rootDir: '../../',
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),

    '@/app/(.*)': '<rootDir>/src/app/$1',
    '@/pages/(.*)': '<rootDir>/src/pages/$1',
    '@/widgets/(.*)': '<rootDir>/src/widgets/$1',
    '@/features/(.*)': '<rootDir>/src/features/$1',
    '@/entities/(.*)': '<rootDir>/src/entities/$1',
    '@/shared/(.*)': '<rootDir>/src/shared/$1'
  },
  globals: {
    __IS_DEV__: true
  }
};

export default config;
