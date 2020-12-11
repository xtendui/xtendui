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
<button type="button" class="btn btn-md rounded-md ${btnPrimary()} demo--tooltip--swap-toggle"
  data-xt-toggle data-xt-tooltip="{ targets: '#tooltip--swap-toggle, #tooltip--swap-toggle-swap' }">
  Swap toggle
</button>

<div class="tooltip group duration-200" id="tooltip--swap-toggle"> <!-- needed for animation time, put max time with delay -->
  <div class="tooltip-md rounded shadow-tooltip ${cardBlack()} transform transition duration-200 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
    Lorem ipsum dolor sit amet
  </div>
</div>

<div class="tooltip group duration-200" id="tooltip--swap-toggle-swap" style="display: none"> <!-- needed for animation time, put max time with delay -->
  <div class="tooltip-md rounded shadow-tooltip ${cardBlack()} transform transition duration-200 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
    Toggled!
  </div>
</div>
`
