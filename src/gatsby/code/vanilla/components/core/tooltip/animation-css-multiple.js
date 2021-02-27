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
<div class="xt-list xt-list-3 items-center demo--tooltip-animation-css-multiple" data-xt-tooltip="{ delay: 25 }">

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    tooltip
  </button>

  <div class="xt-tooltip p-2" data-xt-duration="300">
    <div class="relative ${tooltipMd()} rounded-md shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    tooltip
  </button>

  <div class="xt-tooltip p-2" data-xt-duration="300">
    <div class="relative ${tooltipMd()} rounded-md shadow-tooltip ${cardBlack()}">
      Consectetur adipiscing elit
    </div>
  </div>

</div>
`
