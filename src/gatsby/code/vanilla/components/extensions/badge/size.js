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

  <div class="badge badge-small ${badgeDefault()}">
    Small
  </div>

  <div class="badge badge-medium ${badgeDefault()}">
    Medium
  </div>

  <div class="badge badge-large ${badgeDefault()}">
    Large
  </div>

</div>
`
