import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center">

  <button type="button" class="btn btn-small ${btnDefault()}">
    small
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    medium
  </button>

  <button type="button" class="btn btn-large ${btnDefault()}">
    large
  </button>

</div>
`
