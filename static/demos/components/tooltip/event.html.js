const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ on: 'click', off: 'click' }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-tooltip-element
      >
        click
      </button>

      <div class="xt-tooltip p-3" data-xt-tooltip-target>
        <div
          class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
        >
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>

    <form class="text-sm mt-4">
      <div data-xt-tooltip="{ on: 'focus', off: 'blur' }">
        <input
          type="text"
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
          aria-label="Focus"
          placeholder="Focus"
          data-xt-tooltip-element
        />

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
