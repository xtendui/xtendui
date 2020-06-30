import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-default align-content-center" style="height: 150px;">

  <div class="col-4"></div>
  <div class="col-8"></div>
  <div class="col-8"></div>
  <div class="col-4"></div>

</div>
`
