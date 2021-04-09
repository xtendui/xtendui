const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip>
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        tooltip
      </button>

      <div class="xt-tooltip p-2 group" data-xt-duration="300">
        <div
          class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition ease-out duration-300 opacity-0 -translate-x-4 group-xt-active:opacity-100 group-xt-active:translate-x-0"
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
