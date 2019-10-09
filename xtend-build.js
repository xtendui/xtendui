const glob = require('glob')
const writeFile = require('write')

// write xtend less

let lessCore = ''
const lessCoreGlob = new glob.Glob('src/core/**/*.less', { ignore: ['**/*-setup.less'] }, function (er, files) {
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
const lessExtensionGlob = new glob.Glob('src/extension/**/*.less', function (er, files) {
  for (const file of files) {
    lessExtension += `@import '~xtend-library/${file}';\n`
  }
})
lessExtensionGlob.on('end', function (filepath) {
  writeFile('./src/xtend-extension.less', lessExtension, function (err) {
    if (err) console.log(err)
  })
})

// write xtend js

let jsCore = ''
const jsCoreGlob = new glob.Glob('src/core/**/*.js', function (er, files) {
  jsCore += 'if (typeof window !== \'undefined\') {\n'
  for (const file of files) {
    jsCore += `  require('xtend-library/${file}')\n`
  }
  jsCore += '}'
  jsCore += '\n'
})
jsCoreGlob.on('end', function (filepath) {
  writeFile('./src/xtend-core.js', jsCore, function (err) {
    if (err) console.log(err)
  })
})

let jsDemo = 'if (typeof window !== \'undefined\') {\n'
const jsDemoGlob = new glob.Glob('src/demo/**/*.js', function (er, files) {
  for (const file of files) {
    jsDemo += `  require('xtend-library/${file}')\n`
  }
  jsDemo += '}'
  jsDemo += '\n'
})
jsDemoGlob.on('end', function (filepath) {
  writeFile('./src/xtend-demo.js', jsDemo, function (err) {
    if (err) console.log(err)
  })
})

let jsExtension = 'if (typeof window !== \'undefined\') {\n'
const jsExtensionGlob = new glob.Glob('src/extension/**/*.js', function (er, files) {
  for (const file of files) {
    // const obj = path.parse(file); ${obj.dir}/${obj.name}
    jsExtension += `  require('xtend-library/${file}')\n`
  }
  jsExtension += '}'
  jsExtension += '\n'
})
jsExtensionGlob.on('end', function (filepath) {
  writeFile('./src/xtend-extension.js', jsExtension, function (err) {
    if (err) console.log(err)
  })
})
