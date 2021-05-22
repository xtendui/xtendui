const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip>
      Lorem ipsum

      <span class="xt-tooltip-item" data-xt-group="my-group">
        <a href="#">dolor</a>

        <div class="xt-tooltip p-2" data-xt-group="my-group">
          <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
        </div>

        <div class="xt-tooltip p-2" data-xt-position="right-end" data-xt-group="my-group">
          <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
            Consectetur adipiscing elit
          </div>
        </div>
      </span>

      sit

      <span class="xt-tooltip-item">
        <a href="#">amet</a>

        <div class="xt-tooltip p-2">
          <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </span>
    </div>
  </div>
`

export const object = {
  html: html,
}
