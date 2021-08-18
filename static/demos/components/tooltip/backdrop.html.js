const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ classSkip: false }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()} on:z-tooltip"
          >
            backdrop
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div class="*** xt-backdrop z-below bg-black opacity-25 ***"></div>
            <div
              class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
            >
              Lorem ipsum dolor sit amet
            </div>
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ on: 'click', off: 'click', classSkip: false }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()} on:z-tooltip"
          data-xt-tooltip-element
        >
          backdrop click
        </button>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div class="*** xt-backdrop z-below bg-black opacity-25 ***"></div>
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
`

export const object = {
  html: html,
}
