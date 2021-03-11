import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-tooltip p-2 in-tooltip relative inline-block" data-xt-tooltip="{ closeOutside: false, classSkip: false }">
  <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
    Lorem ipsum dolor sit amet
  </div>
</div>
`
