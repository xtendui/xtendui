import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
  css: true,
  js: false,
}

demo.htmlSource = `
<div class="demo-cols demo-source-from">
  <div class="row">
    <div class="col--custom-width-percent"></div>
    <div class="col--custom-width-px"></div>
    <div class="col--auto"></div>
  </div>
</div>
`
