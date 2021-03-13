const glob = require('glob')
const writeFile = require('write')

let jsCore = ''
const jsCoreGlob = new glob.Glob('file/core/**/*.js', { ignore: ['**/*.css.js'] }, (er, files) => {
  for (const file of files) {
    jsCore += `import 'xtendui/${file}'\n`
  }
})
jsCoreGlob.on('end', () => {
  writeFile('./build/xtend-core.js', jsCore)
})

let jsAddons = ``
const jsAddonsGlob = new glob.Glob('file/addons/**/*.js', { ignore: ['**/*.css.js'] }, (er, files) => {
  for (const file of files) {
    // const obj = path.parse(file); ${obj.dir}/${obj.name}
    jsAddons += `import 'xtendui/${file}'\n`
  }
})
jsAddonsGlob.on('end', () => {
  writeFile('./build/xtend-addons.js', jsAddons)
})

let jsFuture = ``
const jsFutureGlob = new glob.Glob('file/future/**/*.js', { ignore: ['**/*.css.js'] }, (er, files) => {
  for (const file of files) {
    // const obj = path.parse(file); ${obj.dir}/${obj.name}
    jsFuture += `import 'xtendui/${file}'\n`
  }
})
jsFutureGlob.on('end', () => {
  writeFile('./build/xtend-future.js', jsFuture)
})

let jsDemos = ``
const jsDemosGlob = new glob.Glob('static/demos/**/*.js', { ignore: ['**/*.css.js'] }, (er, files) => {
  for (const file of files) {
    jsDemos += `import 'xtendui/${file}'\n`
  }
})
jsDemosGlob.on('end', () => {
  writeFile('./build/xtend-demos.js', jsDemos)
})
