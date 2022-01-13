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

let jsComponents = ''
const jsComponentsGlob = new glob.Glob('src/*.js', { ignore: ['src/*.css.js'] }, (er, files) => {
  for (const file of files) {
    jsComponents += `import 'xtendui/${file}'\n`
  }
})
jsComponentsGlob.on('end', () => {
  writeFile('./dist/xtend-components.js', jsComponents)
})
