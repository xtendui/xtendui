const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-swap-toggle">
    <div data-xt-tooltip="{ duration: 300 }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-toggle
        data-xt-tooltip-element
        data-xt-group="all">
        Swap toggle
      </button>

      <div class="xt-tooltip p-3 *** group ***" data-xt-tooltip-target data-xt-group="all">
        <div
          class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} *** transition duration-300 opacity-0 -translate-y-2 group-in:opacity-100 group-in:translate-y-0 ***">
          <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
        </div>
      </div>

      <div class="xt-tooltip p-3 *** group hidden ***" data-xt-tooltip-target data-xt-group="all">
        <div
          class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} *** transition duration-300 opacity-0 -translate-y-2 group-in:opacity-100 group-in:translate-y-0 ***">
          <div class="${classes.tooltipMd()}">Toggled!</div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
