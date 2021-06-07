const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-prevent-overflow">
    <div class="py-4 px-6 bg-primary-500">
      <div class="xt-list xt-list-3 items-center">
        <div class="xt-tooltip-item">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            tooltip
          </button>

          <div class="xt-tooltip p-2">
            <div
              class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Consectetur adipiscing elit
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

          <div class="xt-tooltip p-2">
            <div
              class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Consectetur adipiscing elit
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
