import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="row" style="flex-wrap: wrap">
  <div class="col-4"></div>
  <div class="col-8"></div>
  <div class="col-12 col-8--sm"></div>
  <div class="col-12 col-4--sm"></div>
  <div class="col-auto col-2--sm"></div>
  <div class="col-auto"></div>
  <div class="col-auto col-2--sm col-auto--lg"></div>
</div>
`
