const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ classSkip: false }">
        <div class="xt-tooltip-item">
          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
            backdrop
          </button>

          <div class="xt-tooltip p-2">
            <div class="xt-backdrop bg-black opacity-25"></div>
            <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ on: 'click', off: 'click', classSkip: false }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()} active:z-tooltip"
        >
          backdrop click
        </button>

        <div class="xt-tooltip p-2">
          <div class="xt-backdrop bg-black opacity-25"></div>
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
          <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
