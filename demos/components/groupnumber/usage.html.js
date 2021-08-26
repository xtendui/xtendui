const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()}">Horizontal</div>

    <form class="text-sm">
      <div class="*** xt-list ***" data-xt-groupnumber>
        <div class="*** inline-flex ***">
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 *** rounded-l${classes.groupButtonRadius()} border border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            data-xt-step="-1"
          >
            -
          </button>
          <input
            type="number"
            class="${classes.input()} w-16 text-center *** border border-l-0 border-gray-300 *** ${classes.inputGray()}"
            aria-label="Quantity"
            value="1"
            min="0"
            max="100"
          />
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 *** rounded-r${classes.groupButtonRadius()} border border-l-0 border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            data-xt-step="1"
          >
            +
          </button>
        </div>
      </div>
    </form>

    <div class="${classes.hBlock()}">Vertical</div>

    <form class="text-sm">
      <div class="*** xt-list ***" data-xt-groupnumber>
        <input
          type="number"
          class="${classes.input()} w-16 text-center *** rounded-tl${classes.groupButtonRadius()} rounded-bl${classes.groupButtonRadius()} border border-r-0 border-gray-300 *** ${classes.inputGray()}"
          aria-label="Quantity"
          value="1"
          min="0"
          max="100"
        />
        <div class="*** inline-flex flex-col ***">
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 *** rounded-tr${classes.groupButtonRadius()} border border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            data-xt-step="1"
          >
            +
          </button>
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 *** rounded-br${classes.groupButtonRadius()} border border-t-0 border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            data-xt-step="-1"
          >
            -
          </button>
        </div>
      </div>
    </form>

    <div class="${classes.hBlock()}">Responsive</div>

    <form class="text-sm mt-6">
      <div class="*** xt-list ***" data-xt-groupnumber>
        <div class="*** inline-flex flex-col md:flex-row ***">
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 *** md:order-3 rounded-t${classes.groupButtonRadius()} md:rounded-tl-none md:rounded-br${classes.groupButtonRadius()} border border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          >
            +
          </button>
          <input
            type="number"
            class="${classes.input()} w-16 *** md:order-2 border-l border-r border-gray-300 md:border-l-0 md:border-r-0 md:border-t md:border-b *** text-center ${classes.inputGray()}"
            aria-label="Quantity"
            value="1"
            min="0"
            max="100"
          />
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 *** md:order-1 rounded-b${classes.groupButtonRadius()} md:rounded-br-none md:rounded-tl${classes.groupButtonRadius()} border border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          >
            -
          </button>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
