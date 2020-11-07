import path from 'path'
const badgeDefault = require('components/snippets/classes/badge-default').default
const badgePrimary = require('components/snippets/classes/badge-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-1 items-center">

  <div class="badge badge-md ${badgeDefault()}">
    Default
  </div>

  <div class="badge badge-md ${badgePrimary()}">
    Primary
  </div>

</div>
`
