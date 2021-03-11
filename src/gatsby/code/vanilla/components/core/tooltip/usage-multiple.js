import path from 'path'

const classes = require('components/snippets/classes').classes

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
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  sit

  <div class="xt-tooltip-item">

    <a href="#">amet</a>

    <div class="xt-tooltip p-2">
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
          Consectetur adipiscing elit
      </div>
    </div>

  </div>

</div>
`
