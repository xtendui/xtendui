import path from 'path'

const badgeMd = require('components/snippets/classes').badgeMd
const badgeDefault = require('components/snippets/classes').badgeDefault
const badgePrimary = require('components/snippets/classes').badgePrimary

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div class="xt-badge ${badgeMd()} ${badgeDefault()}">
    Gray
  </div>

  <div class="xt-badge ${badgeMd()} ${badgePrimary()}">
    Primary
  </div>

</div>
`
