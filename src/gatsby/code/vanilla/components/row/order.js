import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="row row-default">

  <div class="col-4 order-4"></div>
  <div class="col-8 order-5"></div>
  <div class="col-12 col-8-sm order-2-lg"></div>
  <div class="col-12 col-4-sm order-1-lg"></div>
  <div class="col-auto col-2-sm order-3"></div>
  <div class="col-auto order-5"></div>
  <div class="col-auto col-2-sm col-auto-lg order-3"></div>

</div>
`
