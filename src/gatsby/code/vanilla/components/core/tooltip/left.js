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

  <div data-xt-tooltip="{ position: 'left' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      left
    </button>

    <div class="tooltip">
      <div class="card card-tooltip rounded shadow-tooltip ${cardDefaultTooltip()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="tooltip-arrow" data-arrow></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'left-start' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      left start
    </button>

    <div class="tooltip">
      <div class="card card-tooltip rounded shadow-tooltip ${cardDefaultTooltip()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="tooltip-arrow" data-arrow></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'left-end' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      left end
    </button>

    <div class="tooltip">
      <div class="card card-tooltip rounded shadow-tooltip ${cardDefaultTooltip()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="tooltip-arrow" data-arrow></div>
    </div>

  </div>

</div>
`
