import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const tooltipMd = require('components/snippets/classes').tooltipMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardBlack = require('components/snippets/classes').cardBlack

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="demo--tooltip-animation-css" data-xt-tooltip>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    tooltip
  </button>

  <div class="xt-tooltip p-2" data-xt-duration="300">
    <div class="${tooltipMd()} rounded shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

</div>
`
