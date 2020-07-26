const postcssImport = require(`postcss-import`)
const tailwindcss = require(`tailwindcss`)
const postcssNesting = require('postcss-nesting')

module.exports = {
  map: true,
  plugins: [postcssImport(), tailwindcss(), postcssNesting()],
}
