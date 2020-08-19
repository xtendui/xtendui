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
      after top
    </button>
    <div class="drop drop-default drop-after drop-top">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      after bottom
    </button>
    <div class="drop drop-default drop-after drop-bottom">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      after middle
    </button>
    <div class="drop drop-default drop-center drop-middle">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      after contain-bottom
    </button>
    <div class="drop drop-default drop-after drop-contain-bottom">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      after contain-top
    </button>
    <div class="drop drop-default drop-after drop-contain-top">
    ${indentString(markupDrop(), 6)}
    </div>
  </div>

</div>
`
