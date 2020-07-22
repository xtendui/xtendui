module.exports = {
  purge: [],
  theme: require('./src/core/structure/theme.js'),
  plugins: [require('./src/core/button')()],
  //important: true,
}
