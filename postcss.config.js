const path = require('path')
const fs = require('fs')
const postcssImport = require(`postcss-import`)
const tailwindcss = require(`tailwindcss`)
const postcssNesting = require('postcss-nesting')

module.exports = {
  map: true,
  plugins: [
    postcssImport({
      // resolve xtend-library import less
      resolve: function (id) {
        const arr = id.split('/')
        const theme = path.resolve(__dirname, './' + arr.slice(1).join('/'))
        if (fs.existsSync(theme)) {
          return theme
        }
        const module = path.resolve(__dirname, './node_modules/' + arr.join('/'))
        if (fs.existsSync(module)) {
          return module
        }
        return arr.join('/')
      },
    }),
    tailwindcss(),
    postcssNesting(),
  ],
}
