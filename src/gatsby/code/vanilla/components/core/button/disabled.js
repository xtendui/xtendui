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

  <button type="button" class="btn btn-md disabled" aria-disabled="true">
    btn
  </button>

  <button type="button" class="btn btn-md disabled ${btnDefault()}" aria-disabled="true">
    default
  </button>

  <button type="button" class="btn btn-md disabled ${btnPrimary()}" aria-disabled="true">
    primary
  </button>

  <button type="button" class="btn btn-md link disabled" aria-disabled="true">
    link
  </button>

</div>
`
