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

let lessDemo = ''
const lessDemoGlob = new glob.Glob('src/demo/**/*.less', function (er, files) {
  for (const file of files) {
    lessDemo += `@import '~xtend-library/${file}';\n`
  }
})
lessDemoGlob.on('end', function (filepath) {
  writeFile('./src/xtend-demo.less', lessDemo, function (err) {
    if (err) console.log(err)
  })
})

let lessExtension = ''
const lessExtensionGlob = new glob.Glob('src/extensions/**/*.less', function (er, files) {
  for (const file of files) {
    lessExtension += `@import '~xtend-library/${file}';\n`
  }
})
lessExtensionGlob.on('end', function (filepath) {
  writeFile('./src/xtend-extension.less', lessExtension, function (err) {
    if (err) console.log(err)
  })
})
