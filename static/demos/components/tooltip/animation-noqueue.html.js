const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-tooltip="{ queue: false, duration: 300 }">
      <div class="xt-tooltip-item">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          tooltip
        </button>

        <div class="xt-tooltip p-2 group">
          <div
            class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div class="xt-tooltip-item">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          tooltip
        </button>

        <div class="xt-tooltip p-2 group">
          <div
            class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4"
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
