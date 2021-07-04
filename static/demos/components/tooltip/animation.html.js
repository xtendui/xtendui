const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ elements: '[data-xt-tooltip-element]', targets: '[data-xt-tooltip-target]', duration: 300 }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-tooltip-element
      >
        tooltip
      </button>

      <div class="xt-tooltip p-2 group" data-xt-tooltip-target>
        <div
          class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} *** transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***"
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
