import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="badge-container">

  <div class="badge badge-default badge-small">
    Lorem ipsum
  </div>

  <div class="badge badge-default badge-medium">
    Lorem ipsum
  </div>

  <div class="badge badge-default badge-large">
    Lorem ipsum
  </div>

</div>
`
