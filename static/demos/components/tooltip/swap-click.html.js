const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-swap-click">
    <button
      type="button"
      class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
      data-xt-tooltip="{ targets: '#tooltip--swap-click, #tooltip--swap-click-swap', duration: 300 }">
      Swap click
    </button>

    <div
      class="xt-tooltip p-3 transition duration-300 opacity-0 -translate-y-2 in:opacity-100 in:translate-y-0"
      id="tooltip--swap-click">
      <div
        class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}">
        <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
      </div>
    </div>

    <div
      class="xt-tooltip p-3 transition duration-300 opacity-0 -translate-y-2 in:opacity-100 in:translate-y-0 *** !hidden ***"
      id="tooltip--swap-click-swap">
      <div
        class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}">
        <div class="${classes.tooltipMd()}">Clicked!</div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
