const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <button
      type="button"
      class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()} demo--tooltip--swap-toggle"
      data-xt-toggle
      data-xt-tooltip="{ targets: '#tooltip--swap-toggle, #tooltip--swap-toggle-swap' }"
    >
      Swap toggle
    </button>

    <div class="xt-tooltip p-2 group" id="tooltip--swap-toggle" data-xt-duration="300">
      <div
        class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0"
      >
        Lorem ipsum dolor sit amet
      </div>
    </div>

    <div class="xt-tooltip p-2 group" id="tooltip--swap-toggle-swap" style="display: none" data-xt-duration="300">
      <div
        class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0"
      >
        Toggled!
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
