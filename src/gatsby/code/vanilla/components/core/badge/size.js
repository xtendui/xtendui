import path from 'path'
const badgeDefault = require('components/snippets/classes/badge-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-3 items-center">

  <div class="badge text-2xs py-1.5 px-2.5 ${badgeDefault()}">
    Small
  </div>

  <div class="badge text-xs py-2 px-3.5 ${badgeDefault()}">
    Medium
  </div>

  <div class="badge text-sm py-2.5 px-4 ${badgeDefault()}">
    Large
  </div>

</div>
`
