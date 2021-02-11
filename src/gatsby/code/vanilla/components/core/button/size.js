import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-3 items-center">

  <button type="button" class="btn text-3xs py-1.5 px-2.5 rounded-md ${btnPrimary()}">
    small
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
    medium
  </button>

  <button type="button" class="btn text-base py-2.5 px-4 rounded-md ${btnPrimary()}">
    large
  </button>

</div>
`
