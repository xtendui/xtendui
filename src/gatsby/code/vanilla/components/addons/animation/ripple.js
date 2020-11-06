import path from 'path'
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="demo--ripple-default">

  <div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
    Button
  </div>

  <div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
    Card
  </div>
  
</div>
`
