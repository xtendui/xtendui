const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ on: 'click', off: 'click' }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        click
      </button>

      <div class="xt-tooltip p-2">
        <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
          Lorem ipsum

          <div class="inline-block" data-xt-tooltip="{ on: 'click', off: 'click', position: 'auto' }">
            <a href="#">dolor</a>

            <div class="xt-tooltip p-2">
              <div
                class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
              >
                Consectetur adipiscing elit
              </div>
            </div>
          </div>

          sit amet
        </div>
      </div>
    </div>

    <form class="text-sm mt-4">
      <div data-xt-tooltip="{ elements: ':scope > input', on: 'focus', off: 'blur' }">
        <input
          type="text"
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
          aria-label="Focus"
          placeholder="Focus"
        />

        <div class="xt-tooltip p-2">
          <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
