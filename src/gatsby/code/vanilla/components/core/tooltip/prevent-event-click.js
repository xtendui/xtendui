import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-tooltip="{ on: 'click', off: 'click', preventEvent: true }">

  <a href="#tooltip-with-link-0" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
    tooltip
  </a>

  <div class="xt-tooltip p-2">
    <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

</div>
`
