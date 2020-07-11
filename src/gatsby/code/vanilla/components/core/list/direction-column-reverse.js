import path from 'path'
const markupList = require('components/snippets/components/markup-list').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default flex-direction-column-reverse">
${indentString(markupList(), 2)}
</div>
`
