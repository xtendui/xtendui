const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ position: 'top' }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            top
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'top-start' }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            top start
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'top-end' }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            top end
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'top', inset: true }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            top inset
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'top-start', inset: true }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            top start inset
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'top-end', inset: true }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            top end inset
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
