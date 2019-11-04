import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="row" style="justify-content: flex-start">
  <div class="col-2"></div>
  <div class="col-4"></div>
</div>
`
