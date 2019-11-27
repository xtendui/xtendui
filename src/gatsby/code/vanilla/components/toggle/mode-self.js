import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename ).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items-center demo-source-from">
  <button type="button" class="btn btn--default" data-xt-toggle>
    Toggle
  </button>
  <button type="button" class="btn btn--default" data-xt-toggle>
    Toggle
  </button>
</div>
`
