import path from 'path'
const badgeDefault = require('components/snippets/classes/badge-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-1">

  <div class="badge badge-sm ${badgeDefault()}">
    Small
  </div>

  <div class="badge badge-md ${badgeDefault()}">
    Medium
  </div>

  <div class="badge badge-lg ${badgeDefault()}">
    Large
  </div>

</div>
`
