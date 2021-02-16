import path from 'path'
const buttonDefault = require('components/snippets/classes/button-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
  button
</button>
`
