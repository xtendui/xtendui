import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultTooltip = require('components/snippets/classes/card-default-tooltip').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-tooltip="{ position: 'right' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      right
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardDefaultTooltip()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="tooltip-arrow" data-arrow></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'right-start' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      right start
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardDefaultTooltip()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="tooltip-arrow" data-arrow></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'right-end' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      right end
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardDefaultTooltip()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="tooltip-arrow" data-arrow></div>
    </div>

  </div>

</div>
`
