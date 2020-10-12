import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-2">

  <div class="w-4/12">
    <div class="w-full h-12 bg-gray-300"></div>
  </div>

  <div class="w-8/12">
    <div class="w-full h-12 bg-gray-500"></div>
  </div>

  <div class="w-full md:w-6/12">
    <div class="w-full h-12 bg-gray-300"></div>
  </div>

  <div class="w-full md:w-6/12">
    <div class="w-full h-12 bg-gray-500"></div>
  </div>

</div>
`
