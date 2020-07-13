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
<button type="button" class="btn btn-primary" data-xt-drop="{ elementsInner: false, targets: '#drop--unique' }">
  drop
</button>

<br/>

<div class="drop-container" id="drop--unique">
  Drop is relative to here
  <div class="drop drop-default">
  ${indentString(markupDrop(), 4)}
  </div>
</div>
`
