const moduleParents = Object.values(require.cache).filter(m => m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Horizontal</div>

    <form class="text-sm">
      <div class="xt-list" data-xt-groupnumber>
        <div class="xt-list-inner">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded-l-md border border-gray-500 ${classes.buttonDefault()}"
            data-xt-step="-1"
          >
            -
          </button>
          <input
            type="number"
            class="xt-input border border-l-0 border-gray-500 ${classes.inputDefault()}"
            aria-label="Quantity"
            value="1"
            min="0"
            max="100"
          />
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded-r-md border border-l-0 border-gray-500 ${classes.buttonDefault()}"
            data-xt-step="1"
          >
            +
          </button>
        </div>
      </div>
    </form>

    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Vertical</div>

    <form class="text-sm">
      <div class="xt-list" data-xt-groupnumber>
        <div class="xt-list-inner">
          <input
            type="number"
            class="xt-input rounded-tl-md rounded-bl-md border border-r-0 border-gray-500 ${classes.inputDefault()}"
            aria-label="Quantity"
            value="1"
            min="0"
            max="100"
          />
          <div class="xt-list-inner flex-col">
            <button
              type="button"
              class="xt-button text-2xs py-1.5 px-2.5 rounded-tr-md border border-gray-500 ${classes.buttonDefault()}"
              data-xt-step="1"
            >
              +
            </button>
            <button
              type="button"
              class="xt-button text-2xs py-1.5 px-2.5 rounded-br-md border border-t-0 border-gray-500 ${classes.buttonDefault()}"
              data-xt-step="-1"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
