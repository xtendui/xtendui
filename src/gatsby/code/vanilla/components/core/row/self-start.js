import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-default">

  <div class="col-4" style="height: 100px"></div>
  <div class="col-8 align-self-flex-start"></div>
  <div class="col-8" style="height: 100px"></div>
  <div class="col-4 align-self-flex-start"></div>

</div>
`
