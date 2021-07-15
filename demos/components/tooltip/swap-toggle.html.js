const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-swap-toggle">
    <button
      type="button"
      class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
      data-xt-toggle
      data-xt-tooltip="{ targets: '#tooltip--swap-toggle, #tooltip--swap-toggle-swap', duration: 300 }"
    >
      Swap toggle
    </button>

    <div
      class="xt-tooltip p-2 transition duration-300 opacity-0 translate-y-2 in:opacity-100 in:translate-y-0"
      id="tooltip--swap-toggle"
    >
      <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

    <div
      class="xt-tooltip p-2 transition duration-300 opacity-0 translate-y-2 in:opacity-100 in:translate-y-0 *** hidden ***"
      id="tooltip--swap-toggle-swap"
    >
      <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
        Toggled!
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
