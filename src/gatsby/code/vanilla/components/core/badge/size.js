import path from 'path'

const badgeSm = require('components/snippets/classes').badgeSm
const badgeMd = require('components/snippets/classes').badgeMd
const badgeLg = require('components/snippets/classes').badgeLg
const badgeDefault = require('components/snippets/classes').badgeDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div class="xt-badge ${badgeSm()} ${badgeDefault()}">
    Small
  </div>

  <div class="xt-badge ${badgeMd()} ${badgeDefault()}">
    Medium
  </div>

  <div class="xt-badge ${badgeLg()} ${badgeDefault()}">
    Large
  </div>

</div>
`
