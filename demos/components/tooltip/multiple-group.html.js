const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip>
      Lorem ipsum

      <span data-xt-tooltip-element data-xt-group="my-group">
        <a href="#">dolor</a>

        <div class="xt-tooltip p-3" data-xt-tooltip-target data-xt-group="my-group">
          <div
            class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}"
          >
            <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
          </div>
        </div>

        <div class="xt-tooltip p-3" data-xt-tooltip-target data-xt-position="right-end" data-xt-group="my-group">
          <div
            class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}"
          >
            <div class="${classes.tooltipMd()}">Consectetur adipiscing elit</div>
          </div>
        </div>
      </span>

      sit

      <span data-xt-tooltip-element>
        <a href="#">amet</a>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}"
          >
            <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </span>
    </div>
  </div>
`

export const object = {
  html: html,
}
