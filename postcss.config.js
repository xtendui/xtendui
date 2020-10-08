const path = require('path')
const fs = require('fs')

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.md', './src/**/*.js', './src/**/*.css'],
  defaultExtractor: content => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [] // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [] // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    return broadMatches.concat(innerMatches)
  },
})

module.exports = {
  plugins: [
    require(`postcss-import`)({
      // resolve xtend-ui import css
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
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
