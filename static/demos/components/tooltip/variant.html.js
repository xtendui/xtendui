const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element>
          Black
        </button>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="xt-card rounded${classes.tooltipRadius()} *** ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} ***">
            <div class="${classes.tooltipMd()}">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit.<br />Proin
              molestie ${classes.iconLink()} diam nec euismod commodo.
            </div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element>
          Primary
        </button>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="xt-card rounded${classes.tooltipRadius()} *** ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardPrimary()} ***">
            <div class="${classes.tooltipMd()}">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit.<br />Proin
              molestie ${classes.iconLink()} diam nec euismod commodo.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
