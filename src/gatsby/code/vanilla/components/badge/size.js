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

  <div class="badge badge-default badge-small">
    Lorem ipsum
  </div>

  <div class="badge badge-default badge-medium">
    Lorem ipsum
  </div>

  <div class="badge badge-default badge-big">
    Lorem ipsum
  </div>

</div>
`
