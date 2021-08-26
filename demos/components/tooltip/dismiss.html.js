const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ on: 'click', off: 'click' }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-tooltip-element
      >
        Tooltip
      </button>

      <div class="xt-tooltip p-3" data-xt-tooltip-target>
        <div
          class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()}"
        >
          <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
          <button
            type="button"
            class="xt-button *** xt-dismiss *** ${classes.buttonMd()} rounded-b${classes.tooltipRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
