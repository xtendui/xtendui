import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const iconClose = require('components/snippets/icons').iconClose

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<button type="button" class="btn btn-md ${btnDefault()}">
  button
  ${iconClose({ classes: 'icon-left' })}
</button>
`
