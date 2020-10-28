import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <button type="button" class="btn btn-sm ${btnPrimary()}">
    small
  </button>

  <button type="button" class="btn btn-md ${btnPrimary()}">
    medium
  </button>

  <button type="button" class="btn btn-lg ${btnPrimary()}">
    large
  </button>

</div>
`
