import path from 'path'
const markupRow = require('components/snippets/components/markup-row-order').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-space-3">
${indentString(markupRow(), 2)}
</div>
`
