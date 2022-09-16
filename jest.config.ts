/* eslint-disable */
export default {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['jest-chain'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
  },
};
