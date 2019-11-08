import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="row">
  <div class="demo--col-custom-percent"></div>
  <div class="demo--col-custom-px"></div>
  <div class="col-auto"></div>
</div>
`
