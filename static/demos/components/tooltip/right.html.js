const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ position: 'right' }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            right<br />...
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

      <div data-xt-tooltip="{ position: 'right-start' }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            right start<br />...
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

      <div data-xt-tooltip="{ position: 'right-end' }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            right end<br />...
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

      <div data-xt-tooltip="{ position: 'right', inset: true }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            right inset<br />...
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

      <div data-xt-tooltip="{ position: 'right-start', inset: true }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            right start inset<br />...
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

      <div data-xt-tooltip="{ position: 'right-end', inset: true }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            right end inset<br />...
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
