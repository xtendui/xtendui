module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-floating-decimal': 'off',
    'prefer-template': 'off',
    'no-unused-vars': 'off',
    'object-curly-spacing': ['error', 'never'],
    'object-curly-newline': ['error', 'never'],
    'no-param-reassign': ['error', { 'props': false }],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'object-shorthand': ['error', 'always', {
      avoidQuotes: true,
      avoidExplicitReturnArrows: true,
    }],
    'function-paren-newline': ['error', 'consistent'],
    'max-len': ['warn', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
  },
};
