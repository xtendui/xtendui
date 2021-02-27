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
<div class="inline-block demo--tooltip-disable" data-xt-tooltip="{ matches: { '(min-width: 768px)': { disabled: true } } }">

  Lorem ipsum <a href="#">dolor</a> sit amet

  <div class="xt-tooltip p-2">
    <div class="${tooltipMd()} rounded-md shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

</div>
`
