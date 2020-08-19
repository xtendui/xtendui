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
      before top
    </button>
    <div class="drop drop-default drop-before drop-top">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      before bottom
    </button>
    <div class="drop drop-default drop-before drop-bottom">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      before middle
    </button>
    <div class="drop drop-default drop-before drop-middle">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      before contain-bottom
    </button>
    <div class="drop drop-default drop-before drop-contain-bottom">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      before contain-top
    </button>
    <div class="drop drop-default drop-before drop-contain-top">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

</div>
`
