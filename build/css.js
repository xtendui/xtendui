const glob = require('glob')
const writeFile = require('write')

// write xtend css

let cssCore = ''
const cssCoreGlob = new glob.Glob('src/core/**/*.css', { ignore: ['**/_*.css'] }, (er, files) => {
  for (const file of files) {
    cssCore += `@import 'xtend-library/${file}';\n`
  }
})
cssCoreGlob.on('end', () => {
  writeFile('./src/xtend-core.css', cssCore, err => {
    if (err) console.log(err)
  })
})

let cssAddons = ''
const cssAddonsGlob = new glob.Glob('src/addons/**/*.css', { ignore: ['**/_*.css'] }, (er, files) => {
  for (const file of files) {
    cssAddons += `@import 'xtend-library/${file}';\n`
  }
})
cssAddonsGlob.on('end', () => {
  writeFile('./src/xtend-addons.css', cssAddons, err => {
    if (err) console.log(err)
  })
})

let cssExtensions = ''
const cssExtensionsGlob = new glob.Glob('src/extensions/**/*.css', { ignore: ['**/_*.css'] }, (er, files) => {
  for (const file of files) {
    cssExtensions += `@import 'xtend-library/${file}';\n`
  }
})
cssExtensionsGlob.on('end', () => {
  writeFile('./src/xtend-extensions.css', cssExtensions, err => {
    if (err) console.log(err)
  })
})

let cssDemos = ''
const cssDemosGlob = new glob.Glob('src/private/demos/**/*.css', { ignore: ['**/_*.css'] }, (er, files) => {
  for (const file of files) {
    cssDemos += `@import 'xtend-library/${file}';\n`
  }
})
cssDemosGlob.on('end', () => {
  writeFile('./src/xtend-demos.css', cssDemos, err => {
    if (err) console.log(err)
  })
})
