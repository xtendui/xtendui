import path from 'path'
const markupDrop = require('components/snippets/components/markup-drop').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center"
  data-xt-drop="{ elements: ':scope > .drop-container', targets: ':scope > .drop-container > .drop' }">

  <div class="drop-container">
    <button type="button" class="btn btn-primary">
      drop
    </button>
    <div class="drop drop-default">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container">
    <button type="button" class="btn btn-primary">
      drop
    </button>
    <div class="drop drop-default">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

</div>
`
