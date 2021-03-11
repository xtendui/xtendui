import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="demo--tooltip-disable" data-xt-tooltip="{ matches: { '(min-width: 768px)': { disabled: true } } }">

  Lorem ipsum

  <div class="xt-tooltip-item">

    <a href="#">dolor</a>

    <div class="xt-tooltip p-2">
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
        Lorem ipsum dolor sit amet

        <div class="inline-block" data-xt-tooltip="{ on: 'click', off: 'click', position: 'auto' }">

          <a href="#">nested</a>

          <div class="xt-tooltip p-2">
            <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
                Consectetur adipiscing elit
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>

  sit amet

</div>
`
