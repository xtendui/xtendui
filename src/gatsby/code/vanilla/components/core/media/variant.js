import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div class="xt-media-container bg-gray-200" style="padding-bottom: 20%;">
  </div>

  <div class="xt-media-container bg-gray-400" style="padding-bottom: 20%;">
  </div>

  <div class="xt-media-container bg-gray-600" style="padding-bottom: 20%;">
  </div>

</div>
`
