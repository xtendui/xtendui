import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<button type="button" class="btn btn-md rounded-md ${btnPrimary()} demo--tooltip--swap-click"
  data-xt-tooltip="{ targets: '#tooltip--swap-click, #tooltip--swap-click-swap' }">
  Swap click
</button>

<div class="tooltip transform transition duration-300 opacity-0 translate-y-2 active:opacity-100 active:translate-y-0" id="tooltip--swap-click">
  <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
    Lorem ipsum dolor sit amet
  </div>
</div>

<div class="tooltip transform transition duration-300 opacity-0 translate-y-2 active:opacity-100 active:translate-y-0" id="tooltip--swap-click-swap" style="display: none">
  <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
    Clicked!
  </div>
</div>
`
