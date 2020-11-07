import path from 'path'
const badgeDefaultInteractive = require('components/snippets/classes/badge-default-interactive').default
const badgePrimaryInteractive = require('components/snippets/classes/badge-primary-interactive').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-1 items-center">

  <a role="button" class="badge badge-md ${badgeDefaultInteractive()}">
    Default
  </a>

  <a role="button" class="badge badge-md ${badgePrimaryInteractive()}">
    Primary
  </a>

</div>
`
