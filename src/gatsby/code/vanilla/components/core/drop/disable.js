import path from 'path'
const markupDrop = require('components/snippets/components/markup-drop').default
const markupDropNested = require('components/snippets/components/markup-drop-nested').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="drop-container drop-disable" data-xt-drop>
  <button type="button" class="btn btn-primary">
    Toggle
  </button>
  <div class="drop drop-default">
  ${indentString(markupDrop(), 4)}
  </div>
</div>

<div class="drop-container demo--drop-disable-sm" data-xt-drop>
  <button type="button" class="btn btn-primary">
    Toggle
  </button>
  <div class="drop drop-default">
  ${indentString(markupDropNested(), 4)}
  </div>
</div>
`
