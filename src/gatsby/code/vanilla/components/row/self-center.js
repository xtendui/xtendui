import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename ).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="row">
  <div class="col-4" style="height: 100px"></div>
  <div class="col-8" style="align-self: center"></div>
  <div class="col-8" style="height: 100px"></div>
  <div class="col-4" style="align-self: center"></div>
</div>
`
