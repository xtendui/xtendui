const glob = require('glob')
const writeFile = require('write')

let jsCore = ''
const jsCoreGlob = new glob.Glob('src/core/**/*.js', { ignore: ['**/*.css.js'] }, (er, filenames) => {
  for (const filename of filenames) {
    jsCore += `import 'xtendui/${filename}'\n`
  }
})
jsCoreGlob.on('end', () => {
  writeFile('./build/xtend-core.js', jsCore)
})

let jsAddons = ``
const jsAddonsGlob = new glob.Glob('src/addons/**/*.js', { ignore: ['**/*.css.js'] }, (er, filenames) => {
  for (const filename of filenames) {
    // const obj = path.parse(file); ${obj.dir}/${obj.name}
    jsAddons += `import 'xtendui/${filename}'\n`
  }
})
jsAddonsGlob.on('end', () => {
  writeFile('./build/xtend-addons.js', jsAddons)
})

let jsFuture = ``
const jsFutureGlob = new glob.Glob('src/future/**/*.js', { ignore: ['**/*.css.js'] }, (er, filenames) => {
  for (const filename of filenames) {
    // const obj = path.parse(file); ${obj.dir}/${obj.name}
    jsFuture += `import 'xtendui/${filename}'\n`
  }
})
jsFutureGlob.on('end', () => {
  writeFile('./build/xtend-future.js', jsFuture)
})

let jsDemos = ``
const jsDemosGlob = new glob.Glob('static/demos/**/*.js', { ignore: ['**/*.css.js'] }, (er, filenames) => {
  for (const filename of filenames) {
    jsDemos += `import 'xtendui/${filename}'\n`
  }
})
jsDemosGlob.on('end', () => {
  writeFile('./build/xtend-demos.js', jsDemos)
})
