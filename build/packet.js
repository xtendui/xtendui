const glob = require('glob')
const writeFile = require('write')

let cssDemos = ''
const cssDemosGlob = new glob.Glob('static/demos/**/*.css', (er, files) => {
  for (const file of files) {
    cssDemos += `@import 'xtendui/${file}';\n`
  }
})

cssDemosGlob.on('end', () => {
  writeFile('./dist/xtend-demos.css', cssDemos)
})

let jsCore = ''
const jsCoreGlob = new glob.Glob('src/*.js', { ignore: ['src/**.css.js'] }, (er, files) => {
  for (const file of files) {
    jsCore += `import 'xtendui/${file}'\n`
  }
})
jsCoreGlob.on('end', () => {
  writeFile('./dist/xtend-components.js', jsCore)
})
