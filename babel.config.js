module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: require('core-js/package.json').version,
      },
    ],
  ],
  // fix serve babel notices https://github.com/babel/babel/issues/11622
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-private-property-in-object',
  ],
}
