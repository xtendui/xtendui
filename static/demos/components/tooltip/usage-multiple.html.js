const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ elements: '.xt-tooltip-item', targets: '.xt-tooltip' }">
      Lorem ipsum
      <span class="xt-tooltip-item">
        <a href="#">dolor</a>

        <div class="xt-tooltip p-2">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </span>
      sit
      <span class="xt-tooltip-item">
        <a href="#">amet</a>

        <div class="xt-tooltip p-2">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            Consectetur adipiscing elit
          </div>
        </div>
      </span>
    </div>
  </div>
`

export const object = {
  html: html,
}
