const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-animation-css-multiple">
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-tooltip="{ elements: '.xt-tooltip-item', targets: '.xt-tooltip', delay: 25 }"
    >
      <div class="xt-tooltip-item">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          tooltip
        </button>

        <div class="xt-tooltip p-2" data-xt-duration="300">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div class="xt-tooltip-item">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          tooltip
        </button>

        <div class="xt-tooltip p-2" data-xt-duration="300">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
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
