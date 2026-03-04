const { glob } = require('glob')
const fs = require('fs')
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

const intro = `# [Xtendui](https://xtendui.github.io/xtendui/)

## Demos Source Code Extraction

In the [website](https://xtendui.github.io/xtendui/), demos have source code generated in html:
- **Location:** '<script type="text/plain" class="docs_demo_source">'
- **Language:** Indicated by 'data-lang' (html, css, js).
- **External source code:** If 'data-fetch' is present in the website source, the full source is at 'https://xtendui.github.io' + the attribute value.
- **Demos in .md files:** If 'demos: []' is present, the full demos is at 'https://xtendui.github.io/xtendui/demos/' + the demo string inside demos array.\n`

async function compileLLM() {
  let str = intro
  str += `\n# Intro\n\n`
  const filesIntro = await glob(['README.md', 'src/app/markdown/**/intro/**/*.md'], { ignore: ['src/**/hidden/**'] })
  for (const file of filesIntro.sort()) {
    const cleanLabel = file.replace('src/app/markdown/', '').replace('.md', '').replace('/index', '')
    str += `- [${cleanLabel}](https://raw.githubusercontent.com/xtendui/xtendui/refs/heads/master/${file})\n`
  }
  str += `\n# Docs\n\n`
  const files = await glob('src/app/markdown/**/*.md', { ignore: ['src/**/hidden/**', 'src/**/intro/**'] })
  for (const file of files.sort()) {
    const cleanLabel = file.replace('src/app/markdown/', '').replace('.md', '').replace('/index', '')
    str += `- [${cleanLabel}](https://raw.githubusercontent.com/xtendui/xtendui/refs/heads/master/${file})\n`
  }
  writeFile('./llms.txt', str)
}
compileLLM()

async function compileLLMFull() {
  let str = intro
  const filesIntro = await glob(['README.md', 'src/app/markdown/**/intro/**/*.md'], { ignore: ['src/**/hidden/**'] })
  for (const file of filesIntro.sort()) {
    const cleanLabel = file.replace('src/app/markdown/', '').replace('.md', '').replace('/index', '')
    str += `\n# ${cleanLabel}\n\n`
    str += `${fs.readFileSync(file, 'utf8')}`
  }
  const files = await glob('src/app/markdown/**/*.md', { ignore: ['src/**/hidden/**', 'src/**/intro/**'] })
  for (const file of files.sort()) {
    const cleanLabel = file.replace('src/app/markdown/', '').replace('.md', '').replace('/index', '')
    str += `\n# ${cleanLabel}\n\n`
    str += `${fs.readFileSync(file, 'utf8')}`
  }
  writeFile('./llms-full.txt', str)
}
compileLLMFull()
