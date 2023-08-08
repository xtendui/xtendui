const { glob } = require('glob')
const writeFile = require('write')

async function compileCss() {
  let cssDemos = ''
  const cssFiles = await glob('static/demos/**/*.css')
  for (const file of cssFiles.reverse()) {
    cssDemos += `@import 'xtendui/${file}';\n`
  }
  writeFile('./dist/xtend-demos.css', cssDemos)
}
compileCss()

async function compileJs() {
  let jsComponents = ''
  const jsFiles = await glob('src/*.mjs', { ignore: ['src/*.css.js'] })
  for (const file of jsFiles.reverse()) {
    jsComponents += `import 'xtendui/${file}'\n`
  }
  writeFile('./dist/xtend-components.js', jsComponents)
}
compileJs()
