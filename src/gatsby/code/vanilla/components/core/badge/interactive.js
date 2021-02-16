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
<div class="xt-list xt-list-3 items-center">

  <a role="button" class="xt-badge text-xs py-2 px-3.5 ${badgeDefaultInteractive()}">
    Gray
  </a>

  <a role="button" class="xt-badge text-xs py-2 px-3.5 ${badgePrimaryInteractive()}">
    Primary
  </a>

</div>
`
