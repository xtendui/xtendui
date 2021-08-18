const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-animation-css">
    <div class="xt-list xt-list-3 items-center" data-xt-tooltip="{ duration: 300, delay: 50 }">
      <div data-xt-tooltip-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          tooltip
        </button>

        <div class="xt-tooltip p-2" data-xt-tooltip-target>
          <div
            class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div data-xt-tooltip-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          tooltip
        </button>

        <div class="xt-tooltip p-2" data-xt-tooltip-target>
          <div
            class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
          >
            Consectetur adipiscing elit
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
