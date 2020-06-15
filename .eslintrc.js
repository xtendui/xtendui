module.exports = {
  extends: ['eslint:recommended', 'google', 'prettier', 'prettier/react'],
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
    'prettier/prettier': 2,
    'no-console': 'off',
    'prefer-arrow-callback': 2,
    'no-unused-vars': 0,
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
}
