module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prefer-template': 2,
    'prefer-const': 2,
    'no-var': 2,
    'dot-notation': 2,
    'eol-last': 2,
    'max-len': 0,
  },
}
