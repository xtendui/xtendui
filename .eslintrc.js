module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['import', 'prettier'],
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
    'prettier/prettier': 'error',
    'no-console': 'off',
    'global-require': 0,
    'no-restricted-syntax': 0,
    'prefer-destructuring': 0,
    'no-param-reassign': 0,
    'no-nested-ternary': 0,
    'no-restricted-globals': 0,
    'class-methods-use-this': 0,
    'no-unused-vars': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  }
}
