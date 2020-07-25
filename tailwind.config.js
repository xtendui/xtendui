module.exports = {
  theme: require('./src/tailwind-theme')(),
  variants: require('./src/variants')(),
  plugins: [require('./src/plugins')(), require('./src/tailwind-plugins')],
}
