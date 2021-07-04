const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-animation-fast">
    <div class="xt-list xt-list-3 items-center">
      <div
        data-xt-tooltip="{ elements: '[data-xt-tooltip-element]', targets: '[data-xt-tooltip-target]', position: 'bottom', duration: 500 }"
      >
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-tooltip-element
        >
          tooltip
        </button>

        <div class="xt-tooltip p-2 group" data-xt-tooltip-target data-xt-duration="100">
          <div
            class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ elements: '[data-xt-tooltip-element]', targets: '[data-xt-tooltip-target]', position: 'bottom' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-tooltip-element
        >
          tooltip
        </button>

        <div class="xt-tooltip p-2 group" data-xt-tooltip-target data-xt-duration="500">
          <div
            class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ elements: '[data-xt-tooltip-element]', targets: '[data-xt-tooltip-target]', position: 'bottom' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-tooltip-element
        >
          tooltip
        </button>

        <div class="xt-tooltip p-2 group" data-xt-tooltip-target data-xt-duration="500">
          <div
            class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div>
        <div
          class="xt-list xt-list-3 items-center"
          data-xt-tooltip="{ elements: '[data-xt-tooltip-element]', targets: '[data-xt-tooltip-target]', position: 'bottom', delay: 50 }"
        >
          <div data-xt-tooltip-element>
            <button
              type="button"
              class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            >
              tooltip multiple
            </button>

            <div class="xt-tooltip p-2 group" data-xt-tooltip-target>
              <div
                class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***"
              >
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>

          <div data-xt-tooltip-element>
            <button
              type="button"
              class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            >
              tooltip multiple
            </button>

            <div class="xt-tooltip p-2 group" data-xt-tooltip-target>
              <div
                class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***"
              >
                Consectetur adipiscing elit
              </div>
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
