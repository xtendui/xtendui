import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="row">
  <div class="col-4" style="height: 100px"></div>
  <div class="col-8" style="align-self: flex-end"></div>
  <div class="col-8" style="height: 100px"></div>
  <div class="col-4" style="align-self: flex-end"></div>
</div>
`
