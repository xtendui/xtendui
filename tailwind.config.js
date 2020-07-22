module.exports = {
  purge: [],
  variants: require('./src/variants'),
  theme: require('./src/theme'),
  plugins: [
    require('./src/plugins')(),
    require('./src/core/button')()
  ],
  //important: true,
}
