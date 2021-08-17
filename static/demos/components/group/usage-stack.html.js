const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="*** xt-list flex-col ***">
        <div class="*** inline-flex ***">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} *** rounded-tl-md border border-r-0 border-b-0 border-gray-400 *** ${classes.buttonDefault()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input
            type="text"
            class="${classes.input()} *** rounded-tr-md border border-b-0 border-gray-400 *** ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} *** rounded-b-md border border-gray-400 *** ${classes.buttonDefault()}"
        >
          Search
        </button>
      </div>
    </form>

    <form class="text-sm mt-6">
      <div class="*** xt-list ***">
        <input
          type="number"
          class="${classes.input()} w-16 *** rounded-tl-md rounded-bl-md border border-r-0 border-gray-400 *** ${classes.inputDefault()}"
          aria-label="Quantity"
          value="1"
          min="0"
          max="100"
        />
        <div class="*** inline-flex flex-col ***">
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2 *** rounded-tr-md border border-gray-400 *** ${classes.buttonDefault()}"
          >
            +
          </button>
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2 *** rounded-br-md border border-t-0 border-gray-400 *** ${classes.buttonDefault()}"
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
