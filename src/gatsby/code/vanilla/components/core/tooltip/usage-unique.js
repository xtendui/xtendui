import path from 'path'

const tooltipMd = require('components/snippets/classes').tooltipMd
const cardBlack = require('components/snippets/classes').cardBlack

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
Lorem ipsum <a href="#" data-xt-tooltip="{ targets: '#tooltip--unique' }">dolor</a> sit amet

<div class="xt-tooltip p-2" id="tooltip--unique">
  <div class="${tooltipMd()} rounded shadow-tooltip ${cardBlack()}">
    Lorem ipsum dolor sit amet
  </div>
</div>
`
