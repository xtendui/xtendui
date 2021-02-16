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
<div class="list list-3 items-center">

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md disabled" aria-disabled="true">
    btn
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md disabled ${btnDefault()}" aria-disabled="true">
    gray
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md disabled ${btnPrimary()}" aria-disabled="true">
    primary
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 link disabled" aria-disabled="true">
    link
  </button>

</div>
`
