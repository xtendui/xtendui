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
<div class="list list-2 items-center text-white links-inverse py-4 px-6 bg-accent-500">

  <button type="button" class="btn btn-md">
    btn
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    default
  </button>

  <button type="button" class="btn btn-md ${btnPrimary()}">
    primary
  </button>

  <button type="button" class="btn link">
    link
  </button>

  <button type="button" class="btn btn-md text-reset">
    text
  </button>

</div>
`
