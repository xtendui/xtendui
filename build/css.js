const glob = require('glob')
const writeFile = require('write')

// write xtend css

let cssDemos = ''
const cssDemosGlob = new glob.Glob('src/private/demos/**/*.css', { ignore: ['**/_*.css'] }, (er, files) => {
  for (const file of files) {
    cssDemos += `@import 'xtend-ui/${file}';\n`
  }
})
cssDemosGlob.on('end', () => {
  writeFile('./dist/xtend-demos.css', cssDemos, err => {
    if (err) console.log(err)
  })
})
