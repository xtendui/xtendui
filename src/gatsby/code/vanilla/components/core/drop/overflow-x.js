import path from 'path'
const markupDrop = require('components/snippets/components/markup-drop').default
const markupDropCard = require('components/snippets/components/markup-drop-card').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center">

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      list
    </button>
    <div class="drop drop-default drop-overflow-x">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      card
    </button>
    <div class="drop drop-default drop-overflow-x">
    ${indentString(markupDropCard(), 6)}
    </div>
  </div>

</div>
`
