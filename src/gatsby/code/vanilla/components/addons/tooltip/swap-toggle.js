import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()} demo--tooltip--swap-toggle"
  data-xt-toggle data-xt-tooltip="{ targets: '#tooltip--swap-toggle, #tooltip--swap-toggle-swap' }">
  Swap toggle
</button>

<div class="xt-tooltip group" id="tooltip--swap-toggle" data-xt-duration="300">
  <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
    Lorem ipsum dolor sit amet
  </div>
</div>

<div class="xt-tooltip group" id="tooltip--swap-toggle-swap" style="display: none" data-xt-duration="300">
  <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
    Toggled!
  </div>
</div>
`
