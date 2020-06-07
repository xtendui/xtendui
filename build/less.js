const glob = require('glob')
const writeFile = require('write')

// write xtend less

let lessCore = ''
const lessCoreGlob = new glob.Glob('src/core/**/*.less', { ignore: ['**/_*.less'] }, (er, files) => {
  for (const file of files) {
    lessCore += `@import '/${file}';\n`
  }
})
lessCoreGlob.on('end', filepath => {
  writeFile('./src/xtend-core.less', lessCore, err => {
    if (err) console.log(err)
  })
})

let lessAddons = ''
const lessAddonsGlob = new glob.Glob('src/addons/**/*.less', { ignore: ['**/_*.less'] }, (er, files) => {
  for (const file of files) {
    lessAddons += `@import '/${file}';\n`
  }
})
lessAddonsGlob.on('end', filepath => {
  writeFile('./src/xtend-addons.less', lessAddons, err => {
    if (err) console.log(err)
  })
})

let lessExtensions = ''
const lessExtensionsGlob = new glob.Glob('src/extensions/**/*.less', { ignore: ['**/_*.less'] }, (er, files) => {
  for (const file of files) {
    lessExtensions += `@import '/${file}';\n`
  }
})
lessExtensionsGlob.on('end', filepath => {
  writeFile('./src/xtend-extensions.less', lessExtensions, err => {
    if (err) console.log(err)
  })
})

let lessDemos = ''
const lessDemosGlob = new glob.Glob('src/private/demos/**/*.less', { ignore: ['**/_*.less'] }, (er, files) => {
  for (const file of files) {
    lessDemos += `@import '/${file}';\n`
  }
})
lessDemosGlob.on('end', filepath => {
  writeFile('./src/xtend-demos.less', lessDemos, err => {
    if (err) console.log(err)
  })
})
