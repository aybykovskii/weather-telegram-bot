const path = require('path')

module.exports = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: path.resolve(__dirname, 'tsconfig.json'),
        extensions: ['.ts', '.json', '.d.ts'],
      },
    },
  },
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: path.resolve(__dirname, 'tsconfig.json'),
  },
  plugins: ['prettier', '@typescript-eslint', 'import'],
  ignorePatterns: ['*.js'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'new-cap': 'off',
    'no-nested-ternary': 'error',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/naming-convention': 'off',
  },
}
