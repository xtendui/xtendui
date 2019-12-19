import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center">

  <button type="button" class="btn btn-default caret" data-xt-toggle>
    caret
  </button>

  <button type="button" class="btn btn-default caret caret-inverse" data-xt-toggle>
    caret inverse
  </button>

  <button type="button" class="btn btn-default caret caret-horizontal" data-xt-toggle>
    horizontal
  </button>

  <button type="button" class="btn btn-default caret caret-horizontal caret-inverse" data-xt-toggle>
    horizontal inverse
  </button>

</div>
`
