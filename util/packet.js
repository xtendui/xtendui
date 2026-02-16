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

async function compileLLM() {
  let str = `# [Xtendui](https://xtendui.github.io/xtendui/)

Xtend UI is a powerful frontend library of Tailwind CSS components enhanced by vanilla js. It helps you build interfaces with advanced interactions and animations.

- [intro](https://raw.githubusercontent.com/xtendui/xtendui/refs/heads/master/README.md)
- [setup](https://raw.githubusercontent.com/xtendui/xtendui/refs/heads/master/SETUP.md)
- [features](https://raw.githubusercontent.com/xtendui/xtendui/refs/heads/master/src/app/markdown/intro/features/index.md)

## Demos Source Code Extraction

In the [website](https://xtendui.github.io/xtendui/), demos have source code stored in hidden scripts:
- **Location:** '<script type="text/plain" class="docs_demo_source">'
- **Language:** Indicated by 'data-lang' (html, css, js).
- **External Files:** If 'data-fetch' is present, the full source is at 'https://xtendui.github.io' + the attribute value.

## Documentation\n`
  const files = await glob('src/app/markdown/**/*.md', { ignore: ['src/**/hidden/**'] })
  for (const file of files.sort()) {
    const cleanLabel = file.replace('src/app/markdown/', '').replace('.md', '').replace('/index', '')
    str += `- [${cleanLabel}](https://raw.githubusercontent.com/xtendui/xtendui/refs/heads/master/${file})\n`
  }
  writeFile('./llms.txt', str)
}
compileLLM()
