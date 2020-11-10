const glob = require('glob')
const writeFile = require('write')

// build xtend js

let jsCore = ''
const jsCoreGlob = new glob.Glob('src/core/**/*.js', { ignore: ['**/*.css.js'] }, (er, files) => {
  jsCore += `if (typeof window !== 'undefined') {\n`
  for (const file of files) {
    jsCore += `  require('xtendui/${file}')\n`
  }
  jsCore += '}'
  jsCore += '\n'
})
jsCoreGlob.on('end', () => {
  writeFile('./build/xtend-core.js', jsCore)
})

let jsAddons = `if (typeof window !== 'undefined') {\n`
const jsAddonsGlob = new glob.Glob('src/addons/**/*.js', { ignore: ['**/*.css.js'] }, (er, files) => {
  for (const file of files) {
    // const obj = path.parse(file); ${obj.dir}/${obj.name}
    jsAddons += `  require('xtendui/${file}')\n`
  }
  jsAddons += '}'
  jsAddons += '\n'
})
jsAddonsGlob.on('end', () => {
  writeFile('./build/xtend-addons.js', jsAddons)
})

let jsDemos = `if (typeof window !== 'undefined') {\n`
const jsDemosGlob = new glob.Glob('src/private/demos/**/*.js', { ignore: ['**/*.css.js'] }, (er, files) => {
  for (const file of files) {
    jsDemos += `  require('xtendui/${file}')\n`
  }
  jsDemos += '}'
  jsDemos += '\n'
})
jsDemosGlob.on('end', () => {
  writeFile('./build/xtend-demos.js', jsDemos)
})