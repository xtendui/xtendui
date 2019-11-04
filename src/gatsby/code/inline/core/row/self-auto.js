import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="row" style="align-items: center">
  <div class="col-4" style="height: 100px"></div>
  <div class="col-8" style="align-self: auto"></div>
  <div class="col-8" style="height: 100px"></div>
  <div class="col-4" style="align-self: auto"></div>
</div>
`
