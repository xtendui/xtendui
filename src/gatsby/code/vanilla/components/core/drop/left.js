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
<div class="list list-default list-space-small align-items-center">

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      bottom left
    </button>
    <div class="drop drop-default drop-bottom drop-left">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      top left
    </button>
    <div class="drop drop-default drop-top drop-left">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      left middle
    </button>
    <div class="drop drop-default drop-left drop-middle">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      left contain-bottom
    </button>
    <div class="drop drop-default drop-left drop-contain-bottom">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      left contain-top
    </button>
    <div class="drop drop-default drop-left drop-contain-top">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

</div>
`
