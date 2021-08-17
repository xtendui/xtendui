const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ position: 'left' }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            left<br />...
          </button>

          <div class="xt-tooltip p-2" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'left-start' }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            left start<br />...
          </button>

          <div class="xt-tooltip p-2" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'left-end' }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            left end<br />...
          </button>

          <div class="xt-tooltip p-2" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'left', inset: true }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            left inset<br />...
          </button>

          <div class="xt-tooltip p-2" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'left-start', inset: true }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            left start inset<br />...
          </button>

          <div class="xt-tooltip p-2" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'left-end', inset: true }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            left end inset<br />...
          </button>

          <div class="xt-tooltip p-2" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
