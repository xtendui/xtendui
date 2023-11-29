const { glob } = require('glob')
const writeFile = require('write')

async function compileCss() {
  let cssDemos = ''
  const cssFiles = await glob('public/demos/**/*.css')
  for (const file of cssFiles.sort()) {
    cssDemos += `@import '../${file}';\n`
  }
  writeFile('./util/xtend-demos.css', cssDemos)
}
compileCss()

async function compileJs() {
  let jsComponents = ''
  const jsFiles = await glob('src/*.mjs', { ignore: ['src/*.css.js'] })
  for (const file of jsFiles.sort()) {
    jsComponents += `import '../${file}'\n`
  }
  writeFile('./util/xtend-components.js', jsComponents)
}
compileJs()
