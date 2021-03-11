import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <a role="button" class="xt-badge ${classes.badgeMd()} ${classes.badgeDefaultInteractive()}">
    Gray
  </a>

  <a role="button" class="xt-badge ${classes.badgeMd()} ${classes.badgePrimaryInteractive()}">
    Primary
  </a>

</div>
`
