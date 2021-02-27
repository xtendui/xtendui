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
<div class="xt-list xt-list-3 items-center">

  <div data-xt-tooltip="{ position: 'right' }">

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      right<br/>...
    </button>

    <div class="xt-tooltip p-2">
      <div class="relative ${tooltipMd()} rounded-md shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'right-start' }">

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      right start<br/>...
    </button>

    <div class="xt-tooltip p-2">
      <div class="relative ${tooltipMd()} rounded-md shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'right-end' }">

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      right end<br/>...
    </button>

    <div class="xt-tooltip p-2">
      <div class="relative ${tooltipMd()} rounded-md shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
    </div>

  </div>

</div>
`
