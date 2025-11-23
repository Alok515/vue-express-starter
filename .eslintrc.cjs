module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.base.json'],
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier'
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'import/order': ['warn', {
      groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
      'newlines-between': 'always'
    }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  }
};
