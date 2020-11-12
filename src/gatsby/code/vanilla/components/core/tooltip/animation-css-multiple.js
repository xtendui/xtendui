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
<div class="list list-2 items-center demo--tooltip-animation-css-multiple" data-xt-tooltip="{ elements: ':scope > div > a, :scope > div > button', targets: ':scope > div > .tooltip' }">

  <div>

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      tooltip
    </button>

    <div class="tooltip group">
      <div class="card card-tooltip rounded shadow-tooltip ${cardDefaultTooltip()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div>

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      tooltip
    </button>

    <div class="tooltip">
      <div class="card card-tooltip rounded shadow-tooltip ${cardDefaultTooltip()}">
        Consectetur adipiscing elit
      </div>
    </div>

  </div>

</div>
`
