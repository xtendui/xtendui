const glob = require('glob')
const writeFile = require('write')

// write xtend less

let lessCore = ''
const lessCoreGlob = new glob.Glob('src/core/**/index.less', function (er, files) {
  for (const file of files) {
    lessCore += `@import '~xtend-library/${file}';\n`
  }
})
lessCoreGlob.on('end', function (filepath) {
  writeFile('./src/xtend-core.less', lessCore, function (err) {
    if (err) console.log(err)
  })
})

let lessAddons = ''
const lessAddonsGlob = new glob.Glob('src/addons/**/*.less', function (er, files) {
  for (const file of files) {
    lessAddons += `@import '~xtend-library/${file}';\n`
  }
})
lessAddonsGlob.on('end', function (filepath) {
  writeFile('./src/xtend-addons.less', lessAddons, function (err) {
    if (err) console.log(err)
  })
})

let lessExtensions = ''
const lessExtensionsGlob = new glob.Glob('src/extensions/**/*.less', function (er, files) {
  for (const file of files) {
    lessExtensions += `@import '~xtend-library/${file}';\n`
  }
})
lessExtensionsGlob.on('end', function (filepath) {
  writeFile('./src/xtend-extensions.less', lessExtensions, function (err) {
    if (err) console.log(err)
  })
})

let lessDemos = ''
const lessDemosGlob = new glob.Glob('src/demos/**/*.less', function (er, files) {
  for (const file of files) {
    lessDemos += `@import '~xtend-library/${file}';\n`
  }
})
lessDemosGlob.on('end', function (filepath) {
  writeFile('./src/xtend-demos.less', lessDemos, function (err) {
    if (err) console.log(err)
  })
})
