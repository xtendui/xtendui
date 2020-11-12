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
<div class="inline-block demo--tooltip-disable" data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

  Lorem ipsum <a href="#">dolor</a> sit amet

  <div class="tooltip">
    <div class="card card-tooltip rounded shadow-tooltip ${cardDefaultTooltip()}">

      <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

        Lorem ipsum <a href="#">dolor</a> sit amet

        <div class="tooltip">
          <div class="card card-tooltip rounded shadow-tooltip ${cardDefaultTooltip()}">
            Consectetur adipiscing elit
          </div>
        </div>

      </div>

    </div>
  </div>

</div>
`
