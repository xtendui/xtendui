import path from 'path'
const markupList = require('components/snippets/components/markup-list-btn').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="list-block list-default">
${indentString(markupList(), 2)}
</nav>
`
