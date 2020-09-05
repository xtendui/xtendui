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
<div class="list list-space-1">

  <a role="button" class="badge badge-medium ${badgeDefaultInteractive()}">
    Default
  </a>

  <a role="button" class="badge badge-medium ${badgePrimaryInteractive()}">
    Primary
  </a>

</div>
`
