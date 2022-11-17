module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: require('core-js/package.json').version,
      },
    ],
  ],
  plugins: [
    // fix serve babel notices https://github.com/babel/babel/issues/11622
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-private-property-in-object',
  ],
}
