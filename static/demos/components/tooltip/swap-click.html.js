const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-swap-click">
    <button
      type="button"
      class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"
      data-xt-tooltip="{ targets: '#tooltip--swap-click, #tooltip--swap-click-swap' }"
    >
      Swap click
    </button>

    <div class="xt-tooltip p-2 group" id="tooltip--swap-click" data-xt-duration="300">
      <div
        class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-xt-active:opacity-100 group-xt-active:translate-y-0"
      >
        Lorem ipsum dolor sit amet
      </div>
    </div>

    <div class="xt-tooltip p-2 group hidden" id="tooltip--swap-click-swap" data-xt-duration="300">
      <div
        class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-xt-active:opacity-100 group-xt-active:translate-y-0"
      >
        Clicked!
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
