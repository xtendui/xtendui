import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
Lorem ipsum <a href="#" data-xt-tooltip="{ targets: '#tooltip--unique-1, #tooltip--unique-2' }">dolor</a> sit amet

<div class="xt-tooltip p-2" id="tooltip--unique-1">
  <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
    Lorem ipsum dolor sit amet
  </div>
</div>

<div class="xt-tooltip p-2" id="tooltip--unique-2" data-xt-position="right-end">
  <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
    Consectetur adipiscing elit
  </div>
</div>
`
