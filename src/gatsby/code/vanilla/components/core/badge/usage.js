import path from 'path'

const badgeMd = require('components/snippets/classes').badgeMd
const badgeDefault = require('components/snippets/classes').badgeDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-badge ${badgeMd()} ${badgeDefault()}">
  Lorem ipsum
</div>
`
