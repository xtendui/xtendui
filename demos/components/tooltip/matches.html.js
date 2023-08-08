const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ mouseParent: true, matches: { '(min-width: 768px)': { position: 'top-start' } } }">
      Lorem ipsum

      <span>
        <a href="/" data-xt-tooltip-element>dolor</a>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}">
            <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
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
