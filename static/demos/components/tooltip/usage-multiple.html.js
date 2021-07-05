const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip>
      Lorem ipsum
      <span data-xt-tooltip-element>
        <a href="#">dolor</a>

        <div class="*** xt-tooltip off:hidden out:pointer-events-none *** p-2" data-xt-tooltip-target>
          <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </span>
      sit
      <span data-xt-tooltip-element>
        <a href="#">amet</a>

        <div class="*** xt-tooltip off:hidden out:pointer-events-none *** p-2" data-xt-tooltip-target>
          <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
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
