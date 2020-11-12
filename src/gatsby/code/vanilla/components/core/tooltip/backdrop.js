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

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button', backdrop: true }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      backdrop
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardDefaultTooltip()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div class="inline-block" data-xt-tooltip="{ on: 'click', off: false, backdrop: true }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      backdrop click
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardDefaultTooltip()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</div>
`
