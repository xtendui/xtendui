const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ position: 'bottom' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          bottom
        </button>

        <div class="xt-tooltip">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
          <div class="xt-arrow -inset-1 w-4 h-4 bg-black"></div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'bottom-start' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          bottom start
        </button>

        <div class="xt-tooltip">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
          <div class="xt-arrow -inset-1 w-4 h-4 bg-black"></div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'right-end' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          right end<br />...
        </button>

        <div class="xt-tooltip">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
          <div class="xt-arrow -inset-1 w-4 h-4 bg-black"></div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
