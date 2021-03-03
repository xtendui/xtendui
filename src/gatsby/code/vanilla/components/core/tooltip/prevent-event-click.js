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
<div data-xt-tooltip="{ on: 'click', off: 'click', preventEvent: true }">

  <a href="#tooltip-with-link-0" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    tooltip
  </a>

  <div class="xt-tooltip p-2">
    <div class="relative ${tooltipMd()} rounded-md shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

</div>
`
