import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="badge-container">

  <div class="badge badge-default">
    Lorem ipsum
  </div>

  <div class="badge badge-primary">
    Lorem ipsum
  </div>

  <div class="badge badge-success">
    Lorem ipsum
  </div>

  <div class="badge badge-error">
    Lorem ipsum
  </div>

</div>
`
