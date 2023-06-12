module.exports = {
  presets: [
    'babel-preset-gatsby',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: require('core-js/package.json').version,
      },
    ],
  ],
}
