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
<div class="xt-list xt-list-3 items-center">

  <div class="xt-badge text-xs py-2 px-3.5 ${badgeDefault()}">
    Gray
  </div>

  <div class="xt-badge text-xs py-2 px-3.5 ${badgePrimary()}">
    Primary
  </div>

</div>
`
