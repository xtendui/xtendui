const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="relative py-4 px-6 bg-primary-500">
      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          static
        </button>

        <div class="xt-tooltip p-2 xt-tooltip-static xt-tooltip-nospace">
          <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
