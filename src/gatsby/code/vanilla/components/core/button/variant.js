import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center">

  <button type="button" class="btn btn-medium">
    btn
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    default
  </button>

  <button type="button" class="btn btn-medium ${btnPrimary()}">
    primary
  </button>

  <button type="button" class="btn btn-medium link">
    link
  </button>

</div>
`
