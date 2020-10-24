import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center w-full">

  <button type="button" class="btn btn-md ${btnDefault()}" data-xt-toggle>
    Toggle
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}" data-xt-toggle>
    Toggle
  </button>

</div>
`
