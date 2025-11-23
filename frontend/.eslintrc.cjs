module.exports = {
  extends: [
    '../.eslintrc.cjs',
    'plugin:vue/vue3-recommended',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      }
    }
  ],
  env: {
    browser: true,
    es2022: true,
    jest: true,
  },
  plugins: ['vue', 'tailwindcss'],
  extends: [
    '../.eslintrc.cjs',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'warn',
    'vue/html-self-closing': ['error', {
      html: { void: 'always', normal: 'never', component: 'always' }
    }]
  }
};
