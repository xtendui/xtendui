import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center">

  <button type="button" class="btn btn-default" data-xt-toggle>
    Toggle
  </button>

  <button type="button" class="btn btn-default" data-xt-toggle>
    Toggle
  </button>

</div>
`
