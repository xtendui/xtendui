import path from 'path'
const badgeDefault = require('components/snippets/classes/badge-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="badge badge-medium ${badgeDefault()}">
  Lorem ipsum
</div>
`
