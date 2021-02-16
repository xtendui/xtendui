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
<button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()} demo--tooltip--swap-click"
  data-xt-tooltip="{ targets: '#tooltip--swap-click, #tooltip--swap-click-swap' }">
  Swap click
</button>

<div class="xt-tooltip group" id="tooltip--swap-click" data-xt-duration="300">
  <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
    Lorem ipsum dolor sit amet
  </div>
</div>

<div class="xt-tooltip group" id="tooltip--swap-click-swap" style="display: none" data-xt-duration="300">
  <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
    Clicked!
  </div>
</div>
`
