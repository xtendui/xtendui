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

<div class="tooltip group duration-200" id="tooltip--swap-click"> <!-- needed for animation time, put max time with delay -->
  <div class="tooltip-md rounded shadow-tooltip ${cardBlack()} transform transition duration-200 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
    Lorem ipsum dolor sit amet
  </div>
</div>

<div class="tooltip group duration-200" id="tooltip--swap-click-swap" style="display: none"> <!-- needed for animation time, put max time with delay -->
  <div class="tooltip-md rounded shadow-tooltip ${cardBlack()} transform transition duration-200 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
    Clicked!
  </div>
</div>
`
