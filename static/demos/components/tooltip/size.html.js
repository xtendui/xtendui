const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-tooltip-element
        >
          small
        </button>

        <div class="xt-tooltip p-2" data-xt-tooltip-target>
          <div
            class="relative *** ${classes.tooltipSm()} rounded${classes.tooltipRadius()} *** shadow-tooltip ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-tooltip-element
        >
          medium
        </button>

        <div class="xt-tooltip p-2" data-xt-tooltip-target>
          <div
            class="relative *** ${classes.tooltipMd()} rounded${classes.tooltipRadius()} *** shadow-tooltip ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-tooltip-element
        >
          large
        </button>

        <div class="xt-tooltip p-2" data-xt-tooltip-target>
          <div
            class="relative *** ${classes.tooltipLg()} rounded${classes.tooltipRadius()} *** shadow-tooltip ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-tooltip-element
        >
          max-width
        </button>

        <div class="xt-tooltip p-2" data-xt-tooltip-target>
          <div
            class="relative *** ${classes.tooltipMd()} max-w-lg rounded${classes.tooltipRadius()} *** shadow-tooltip ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
            fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
            egestas congue.
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
