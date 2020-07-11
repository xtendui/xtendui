module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 2,
  },
}
