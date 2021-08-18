const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Horizontal</div>

    <form class="text-sm">
      <div class="xt-list" data-xt-groupnumber>
        <div class="inline-flex">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded-l${classes.groupRadius()} border border-gray-400 ${classes.buttonDefault()}"
            data-xt-step="-1"
          >
            -
          </button>
          <input
            type="number"
            class="${classes.input()} w-16 border border-l-0 border-gray-400 ${classes.inputDefault()}"
            aria-label="Quantity"
            value="1"
            min="0"
            max="100"
          />
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded-r${classes.groupRadius()} border border-l-0 border-gray-400 ${classes.buttonDefault()}"
            data-xt-step="1"
          >
            +
          </button>
        </div>
      </div>
    </form>

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Vertical</div>

    <form class="text-sm">
      <div class="xt-list" data-xt-groupnumber>
        <input
          type="number"
          class="${classes.input()} w-16 rounded-tl${classes.groupRadius()} rounded-bl${classes.groupRadius()} border border-r-0 border-gray-400 ${classes.inputDefault()}"
          aria-label="Quantity"
          value="1"
          min="0"
          max="100"
        />
        <div class="inline-flex flex-col">
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 rounded-tr${classes.groupRadius()} border border-gray-400 ${classes.buttonDefault()}"
            data-xt-step="1"
          >
            +
          </button>
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 rounded-br${classes.groupRadius()} border border-t-0 border-gray-400 ${classes.buttonDefault()}"
            data-xt-step="-1"
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
