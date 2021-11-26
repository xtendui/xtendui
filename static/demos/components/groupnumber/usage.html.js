const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()}">Horizontal design</div>

    <form class="text-sm">
      <div class="*** xt-list flex-nowrap ***" data-xt-groupnumber>
        <div class="*** inline-flex ***">
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 *** rounded${classes.groupButtonRadius()} rounded-r-none border border-r-0 border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            data-xt-step="-1">
            -
          </button>
          <input
            type="number"
            class="${classes.input()} w-16 text-center *** border border-gray-300 *** ${classes.inputGray()}"
            aria-label="Quantity"
            value="22"
            min="22"
            max="44"
            step="11" />
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 *** rounded${classes.groupButtonRadius()} rounded-l-none border border-l-0 border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            data-xt-step="1">
            +
          </button>
        </div>
      </div>
    </form>

    <div class="${classes.hBlock()}">Side design and no limit and no validate</div>

    <p>Pressing <code>Enter</code> does browser validation also if no limit and no validate on component.</p>

    <form class="text-sm">
      <div class="*** xt-list flex-nowrap ***" data-xt-groupnumber="{ limit: false, validate: false }">
        <input
          type="number"
          class="${classes.input()} w-16 text-center *** rounded${classes.groupButtonRadius()} rounded-r-none border border-r-0 border-gray-300 *** ${classes.inputGray()}"
          aria-label="Quantity"
          value="22"
          min="22"
          max="44"
          step="11" />
        <div class="*** inline-flex flex-col ***">
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 *** rounded${classes.groupButtonRadius()} rounded-l-none rounded-b-none border border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            data-xt-step="1">
            +
          </button>
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 *** rounded-br${classes.groupButtonRadius()} rounded-l-none rounded-t-none border border-t-0 border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            data-xt-step="-1">
            -
          </button>
        </div>
      </div>
    </form>

    <div class="${classes.hBlock()}">Vertical design and no initial value</div>

    <form class="text-sm mt-6">
      <div class="*** inline-flex flex-col ***" data-xt-groupnumber>
        <button
          type="button"
          class="xt-button text-2xs py-1 px-2.5 *** rounded${classes.groupButtonRadius()} rounded-b-none border border-gray-300 border-b-0 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          data-xt-step="1">
          +
        </button>
        <input
          type="number"
          class="${classes.input()} w-16 *** border border-gray-300 *** text-center ${classes.inputGray()}"
          aria-label="Quantity"
          min="22"
          max="44"
          step="11" />
        <button
          type="button"
          class="xt-button text-2xs py-1 px-2.5 *** rounded${classes.groupButtonRadius()} rounded-t-none border border-gray-300 border-t-0 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          data-xt-step="-1">
          -
        </button>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
