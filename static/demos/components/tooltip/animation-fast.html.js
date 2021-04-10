const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-animation-fast">
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ position: 'bottom' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          tooltip
        </button>

        <div class="xt-tooltip p-2 group" data-xt-duration="300">
          <div
            class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition ease-out duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'bottom' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          tooltip
        </button>

        <div class="xt-tooltip p-2 group" data-xt-duration="300">
          <div
            class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition ease-out duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'bottom' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          tooltip
        </button>

        <div class="xt-tooltip p-2 group" data-xt-duration="300">
          <div
            class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition ease-out duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div>
        <div
          class="xt-list xt-list-3 items-center"
          data-xt-tooltip="{ position: 'bottom', elements: '.xt-tooltip-item', targets: '.xt-tooltip', delay: 25 }"
        >
          <div class="xt-tooltip-item">
            <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
              tooltip multiple
            </button>

            <div class="xt-tooltip p-2 group" data-xt-duration="300">
              <div
                class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition ease-out duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0"
              >
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>

          <div class="xt-tooltip-item">
            <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
              tooltip multiple
            </button>

            <div class="xt-tooltip p-2 group" data-xt-duration="300">
              <div
                class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition ease-out duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0"
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
