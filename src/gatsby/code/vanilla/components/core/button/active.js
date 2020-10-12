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
<div class="list list-2 items-center">

  <button type="button" class="btn btn-md active" aria-selected="true">
    btn
  </button>

  <button type="button" class="btn btn-md active ${btnDefault()}" aria-selected="true">
    default
  </button>

  <button type="button" class="btn btn-md active ${btnPrimary()}" aria-selected="true">
    primary
  </button>

  <button type="button" class="btn btn-md link active" aria-selected="true">
    link
  </button>

</div>
`
