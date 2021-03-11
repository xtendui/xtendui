import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-tooltip="{ position: 'auto' }">

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
      auto
    </button>

    <div class="xt-tooltip p-2">
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'auto-start' }">

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
      auto start
    </button>

    <div class="xt-tooltip p-2">
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'auto-end' }">

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
      auto end
    </button>

    <div class="xt-tooltip p-2">
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
    </div>

  </div>

</div>
`
