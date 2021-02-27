import path from 'path'

const tooltipMd = require('components/snippets/classes').tooltipMd
const cardBlack = require('components/snippets/classes').cardBlack

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-tooltip>

  Lorem ipsum

  <div class="xt-tooltip-item">

    <a href="#">dolor</a>

    <div class="xt-tooltip p-2">
      <div class="relative ${tooltipMd()} rounded-md shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  sit

  <div class="xt-tooltip-item">

    <a href="#">amet</a>

    <div class="xt-tooltip p-2">
      <div class="relative ${tooltipMd()} rounded-md shadow-tooltip ${cardBlack()}">
          Consectetur adipiscing elit
      </div>
    </div>

  </div>

</div>
`
