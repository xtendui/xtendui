import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-default row-space-medium">

  <div class="col-4"></div>
  <div class="col-8"></div>
  <div class="col-12 col-8-sm"></div>
  <div class="col-12 col-4-sm"></div>
  <div class="col-auto col-2-sm"></div>
  <div class="col-auto"></div>
  <div class="col-auto col-2-sm col-auto-lg"></div>

</div>
`
