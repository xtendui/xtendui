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
<button type="button" class="btn btn-md rounded-md ${btnPrimary()}" data-xt-tooltip="{ targets: '#tooltip--unique' }">
  tooltip
</button>

<div class="tooltip" id="tooltip--unique">
  <div class="tooltip-md rounded shadow-tooltip ${cardDefaultTooltip()}">
    Lorem ipsum dolor sit amet
  </div>
</div>
`
