import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import cypressPlugin from 'eslint-plugin-cypress'
import reactHooks from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'
import globals from 'globals'

export default [
  // Ignores (replaces .eslintignore)
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', '**/*.min.js', '**/*.min.js.map'],
  },

  // eslint:recommended
  js.configs.recommended,

  // React hooks flat config
  reactHooks.configs.flat.recommended,

  // @next/next rules
  nextPlugin.configs.recommended,

  // Prettier (disables conflicting formatting rules)
  prettierConfig,

  // Cypress globals
  cypressPlugin.configs.globals,

  // Project rules
  {
    plugins: {
      prettier: prettierPlugin,
      cypress: cypressPlugin,
    },
    languageOptions: {
      ecmaVersion: 13,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
        ...globals.jest,
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
  },
]
