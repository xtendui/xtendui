import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center demo--tooltip-animation-css-multiple" data-xt-tooltip="{ delay: 25 }">

  <div class="xt-tooltip-item">

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
      tooltip
    </button>

    <div class="xt-tooltip p-2" data-xt-duration="300">
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div class="xt-tooltip-item">

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
      tooltip
    </button>

    <div class="xt-tooltip p-2" data-xt-duration="300">
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
        Consectetur adipiscing elit
      </div>
    </div>

  </div>

</div>
`
