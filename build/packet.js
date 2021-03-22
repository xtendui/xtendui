const glob = require('glob')
const writeFile = require('write')

let cssDemos = ''
const cssDemosGlob = new glob.Glob('static/demos/**/*.css', { ignore: ['**/_*.css'] }, (er, files) => {
  for (const file of files) {
    cssDemos += `@import 'xtendui/${file}';\n`
  }
})

cssDemosGlob.on('end', () => {
  writeFile('./dist/xtend-demos.css', cssDemos)
})

let jsCore = ''
const jsCoreGlob = new glob.Glob('src/core/**/*.js', { ignore: ['**/*.css.js'] }, (er, files) => {
  for (const file of files) {
    jsCore += `import 'xtendui/${file}'\n`
  }
})
jsCoreGlob.on('end', () => {
  writeFile('./dist/xtend-core.js', jsCore)
})

let jsAddons = ``
const jsAddonsGlob = new glob.Glob('src/addons/**/*.js', { ignore: ['**/*.css.js'] }, (er, files) => {
  for (const file of files) {
    // const obj = path.parse(file); ${obj.dir}/${obj.name}
    jsAddons += `import 'xtendui/${file}'\n`
  }
})
jsAddonsGlob.on('end', () => {
  writeFile('./dist/xtend-addons.js', jsAddons)
})
