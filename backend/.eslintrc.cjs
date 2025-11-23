module.exports = {
  extends: ['../.eslintrc.cjs'],
  env: {
    node: true,
    jest: true,
    es2022: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    'no-console': 'warn'
  }
};
