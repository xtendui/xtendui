const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ on: 'click', off: 'click' }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-tooltip-element
      >
        click
      </button>

      <div class="xt-tooltip p-3" data-xt-tooltip-target>
        <div
          class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()}"
        >
          <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
        </div>
      </div>

      <form class="text-sm mt-4">
        <div data-xt-tooltip="{ on: 'focus', off: 'blur' }">
          <input
            type="text"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
            aria-label="Focus"
            placeholder="Focus"
            data-xt-tooltip-element
          />

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()}"
            >
              <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
`

export const object = {
  html: html,
}
