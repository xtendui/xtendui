const path = require('path')
const fs = require('fs')

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.md', './src/**/*.js', './src/**/*.css'],
  safelist: {
    greedy: [/^iframe--/, /pre/, /code/, /token/],
  },
  defaultExtractor: content => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
    return broadMatches.concat(innerMatches)
  },
})

module.exports = {
  plugins: [
    require(`postcss-import`)({
      // resolve xtendui import css
      resolve: function (id) {
        const arr = id.split('/')
        const theme = path.resolve(__dirname, `./${arr.slice(1).join('/')}`)
        if (fs.existsSync(theme)) {
          return theme
        }
        const module = path.resolve(__dirname, `./node_modules/${arr.join('/')}`)
        if (fs.existsSync(module)) {
          return module
        }
        return arr.join('/')
      },
    }),
    require(`tailwindcss`),
    require('postcss-nested'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
