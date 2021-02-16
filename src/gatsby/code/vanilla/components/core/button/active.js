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

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md active">
    btn
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md active ${btnDefault()}">
    gray
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md active ${btnPrimary()}">
    primary
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 link active">
    link
  </button>

</div>
`
