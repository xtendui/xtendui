import path from 'path'

const badgeMd = require('components/snippets/classes').badgeMd
const badgeDefaultInteractive = require('components/snippets/classes').badgeDefaultInteractive
const badgePrimaryInteractive = require('components/snippets/classes').badgePrimaryInteractive

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <a role="button" class="xt-badge ${badgeMd()} ${badgeDefaultInteractive()}">
    Gray
  </a>

  <a role="button" class="xt-badge ${badgeMd()} ${badgePrimaryInteractive()}">
    Primary
  </a>

</div>
`
