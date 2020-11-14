import path from 'path'
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
Lorem ipsum <a href="#" data-xt-tooltip="{ targets: '#tooltip--unique' }">dolor</a> sit amet

<div class="tooltip" id="tooltip--unique">
  <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
    Lorem ipsum dolor sit amet
  </div>
</div>
`
