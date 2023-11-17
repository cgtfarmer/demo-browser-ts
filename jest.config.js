const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ['<rootDir>/src/assets/app'],
  // modulePaths: [compilerOptions.baseUrl],
  // modulePaths: ['<rootDir>/src/assets/app/'],
  // modulePaths: ['node_modules', '<rootDir>/src/assets/app/'],
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/assets/app' }),
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  // transform: {
  //     '^.+\\.tsx?$': 'ts-jest'
  // },
  // moduleDirectories: ['node_modules', './src/assets/app'],
  moduleDirectories: ['<rootDir>/src/assets/app', 'node_modules'],
  // moduleDirectories: ['node_modules', '<rootDir>/src/assets/app/'],
  // moduleNameMapper: {
  //   // '^@/(.*)$': '<rootDir>/src/assets/app/$1'
  //   '^@/(.*)$': '$1'
  // },
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/assets/app' }),
  testMatch: [
    // "**/__tests__/**/*.[jt]s?(x)",
    // "**/?(*.)+(spec|test).[tj]s?(x)"
    "**/__tests__/**/*.[t]s?(x)",
    "**/?(*.)+(spec|test).[t]s?(x)"
  ],
}