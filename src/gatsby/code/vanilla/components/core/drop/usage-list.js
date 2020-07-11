import path from 'path'
const markupDrop = require('components/snippets/components/markup-drop-usage').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="drop-container" data-xt-drop>
  <button type="button" class="btn btn-primary">
    Toggle
  </button>
  <div class="drop drop-default">
  ${indentString(markupDrop(), 4)}
  </div>
</div>
`
