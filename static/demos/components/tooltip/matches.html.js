const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ matches: { '(min-width: 768px)': { position: 'top-start' } } }">
      Lorem ipsum

      <span data-xt-tooltip-element>
        <a href="#">dolor</a>

        <div class="xt-tooltip p-2" data-xt-tooltip-target>
          <div
            class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </span>

      sit amet
    </div>
  </div>
`

export const object = {
  html: html,
}
