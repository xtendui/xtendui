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
<div class="list list-default list-space-2 items-center">

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      bottom center
    </button>
    <div class="drop drop-default drop-bottom drop-center">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      top center
    </button>
    <div class="drop drop-default drop-top drop-center">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      center middle
    </button>
    <div class="drop drop-default drop-center drop-middle">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

</div>
`
