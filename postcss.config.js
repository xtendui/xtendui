const postcssImport = require(`postcss-import`)
const tailwindcss = require(`tailwindcss`)
const postcssNesting = require('postcss-nesting')

module.exports = {
  //parser: 'postcss-scss',
  map: true,
  plugins: [postcssImport(), tailwindcss(), postcssNesting()],
}

/*
const path = require('path')
const fs = require('fs')
'postcss-import': {
  // resolve xtend-library css
  resolve: function (id) {
    const arr = id.split('/')
    const first = arr[0]
    if (first === '~xtend-library') {
      arr.shift();
      const theme = path.resolve(__dirname, './' + arr.join('/'))
      const module = path.resolve(__dirname, './node_modules/' + arr.join('/'))
      if (fs.existsSync(theme)) {
        return theme
      } else {
        return module
      }
    }
  }
},
'postcss-mixins': {},
'postcss-nesting': {},
'postcss-simple-vars': {},
'postcss-extend-rule': {},
'postcss-object-fit-images': {},
'postcss-preset-env': {
  stage: 0,
  exportTo: 'dist/test.js',
  features: {
    'color-mod-function': { unresolved: 'warn' }
  }
},
*/
/*
'postcss-custom-properties': {
  // WAITING FOR https://github.com/csstools/postcss-preset-env/issues/145
  // exportTo: 'dist/xtend-vars.js' // PROBLEM it compiles js before exporting this vars!!! sarebbe meglio settare le variabili esternamente con postcss-preset-env o https://github.com/csstools/postcss-env-function
  // USAGE
  // import {customProperties} from 'xtend-library/dist/xtend-vars.js'
  // console.log(customProperties['--primary'])
},
*/