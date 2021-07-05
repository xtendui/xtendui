const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-tooltip-element
        >
          Black
        </button>

        <div class="xt-tooltip off:hidden out:pointer-events-none p-2" data-xt-tooltip-target>
          <div
            class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} *** shadow-tooltip ${classes.cardBlack()} ***"
          >
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.<br />Proin
            molestie ${classes.iconLink()} diam nec euismod commodo.
          </div>
        </div>
      </div>

      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-tooltip-element
        >
          Primary
        </button>

        <div class="xt-tooltip off:hidden out:pointer-events-none p-2" data-xt-tooltip-target>
          <div
            class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} *** shadow-tooltip ${classes.cardPrimary()} ***"
          >
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.<br />Proin
            molestie ${classes.iconLink()} diam nec euismod commodo.
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
