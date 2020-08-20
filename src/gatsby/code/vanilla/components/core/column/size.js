import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-space-3">

  <div class="col-4"></div>
  <div class="col-8"></div>
  <div class="w-full col-8-sm"></div>
  <div class="w-full sm:w-4/12"></div>
  <div class="col-auto col-2-sm"></div>
  <div class="col-auto"></div>
  <div class="col-auto col-2-sm col-auto-lg"></div>

</div>
`
