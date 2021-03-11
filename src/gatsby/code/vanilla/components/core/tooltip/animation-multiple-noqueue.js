import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-tooltip="{ delay: 25, queue: false }">

  <div class="xt-tooltip-item">

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
      tooltip
    </button>

    <div class="xt-tooltip p-2 group" data-xt-duration="300">
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition ease-out duration-300 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div class="xt-tooltip-item">

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
      tooltip
    </button>

    <div class="xt-tooltip p-2 group" data-xt-duration="300">
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition ease-out duration-300 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0">
        Consectetur adipiscing elit
      </div>
    </div>

  </div>

</div>
`
