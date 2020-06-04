import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="row row-default align-content-stretch" style="height: 150px;">

  <div class="col-4"></div>
  <div class="col-8"></div>
  <div class="col-8"></div>
  <div class="col-4"></div>

</div>
`
