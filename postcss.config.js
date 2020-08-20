const path = require('path')
const fs = require('fs')

module.exports = {
  map: true,
  plugins: [
    require(`postcss-import`)({
      // resolve xtend-library import css
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
    require(`tailwindcss`),
    require('postcss-nested'),
  ],
}
