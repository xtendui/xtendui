const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ mouseParent: true }">
      Lorem ipsum

      <span>
        <a href="/" data-xt-tooltip-element>dolor</a>

        <div class="*** xt-tooltip p-3 ***" data-xt-tooltip-target>
          <div
            class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}">
            <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </span>

      sit

      <span>
        <a href="/" data-xt-tooltip-element>amet</a>

        <div class="*** xt-tooltip p-3 ***" data-xt-tooltip-target>
          <div
            class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}">
            <div class="${classes.tooltipMd()}">Consectetur adipiscing elit</div>
          </div>
        </div>
      </span>
    </div>
  </div>
`

export const object = {
  html: html,
}
