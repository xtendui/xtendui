import path from 'path'
const markupList = require('components/snippets/components/markup-list-items-stretch').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list items-stretch" style="height: 150px;">
${indentString(markupList(), 2)}
</div>
`
