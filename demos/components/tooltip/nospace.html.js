const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ position: 'bottom' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element
        >
          bottom
        </button>

        <div class="xt-tooltip off:hidden out:pointer-events-none" data-xt-tooltip-target>
          <div
            class="xt-card ${classes.tooltipMd()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet
          </div>
          <div class="xt-arrow -inset-1 w-3 h-3 bg-black"></div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'bottom-start' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element
        >
          bottom start
        </button>

        <div class="xt-tooltip off:hidden out:pointer-events-none" data-xt-tooltip-target>
          <div
            class="xt-card ${classes.tooltipMd()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet
          </div>
          <div class="xt-arrow -inset-1 w-3 h-3 bg-black"></div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'right-end' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element
        >
          right end<br />...
        </button>

        <div class="xt-tooltip off:hidden out:pointer-events-none" data-xt-tooltip-target>
          <div
            class="xt-card ${classes.tooltipMd()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet
          </div>
          <div class="xt-arrow -inset-1 w-3 h-3 bg-black"></div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
