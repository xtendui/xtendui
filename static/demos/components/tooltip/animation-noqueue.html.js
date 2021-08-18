const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-tooltip="{ queue: false, duration: 300 }">
      <div data-xt-tooltip-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          tooltip
        </button>

        <div
          class="xt-tooltip p-2 *** transition duration-300 opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-tooltip-target
        >
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

        <div
          class="xt-tooltip p-2 *** transition duration-300 opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-tooltip-target
        >
          <div
            class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} "
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
