module.exports = {
  theme: {
    extend: require('./src/theme'),
  },
  variants: require('./src/variants'),
  plugins: [
    require('./src/plugins')(),
    require('./src/core/button')(),
  ],
}
