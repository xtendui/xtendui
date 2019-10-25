const glob = require('glob')
const writeFile = require('write')

// build xtend js

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
const jsDemoGlob = new glob.Glob('src/demos/**/*.js', function (er, files) {
  for (const file of files) {
    jsDemo += `  require('xtend-library/${file}')\n`
  }
  jsDemo += '}'
  jsDemo += '\n'
})
jsDemoGlob.on('end', function (filepath) {
  writeFile('./src/xtend-demos.js', jsDemo, function (err) {
    if (err) console.log(err)
  })
})

let jsExtension = 'if (typeof window !== \'undefined\') {\n'
const jsExtensionGlob = new glob.Glob('src/extensions/**/*.js', function (er, files) {
  for (const file of files) {
    // const obj = path.parse(file); ${obj.dir}/${obj.name}
    jsExtension += `  require('xtend-library/${file}')\n`
  }
  jsExtension += '}'
  jsExtension += '\n'
})
jsExtensionGlob.on('end', function (filepath) {
  writeFile('./src/xtend-extensions.js', jsExtension, function (err) {
    if (err) console.log(err)
  })
})
