const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ duration: 300 }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-tooltip-element
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
  </div>
`

export const object = {
  html: html,
}
