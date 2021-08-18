const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="*** xt-list flex-col md:flex-row ***">
        <div class="*** inline-flex flex-auto ***">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} *** rounded-t${classes.groupRadius()} md:rounded-tr-none md:rounded-l${classes.groupRadius()} *** ${classes.buttonDefault()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>

          <input
            type="text"
            class="${classes.input()} ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} *** rounded-b${classes.groupRadius()} md:rounded-bl-none md:rounded-r${classes.groupRadius()} *** ${classes.buttonPrimary()}"
        >
          Search
        </button>
      </div>
    </form>

    <form class="text-sm mt-6">
      <div class="*** xt-list ***">
        <div class="*** inline-flex flex-col md:flex-row ***">
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 *** rounded-tl${classes.groupRadius()} md:rounded-l${classes.groupRadius()} *** ${classes.buttonPrimary()}"
          >
            +
          </button>
          <input
            type="number"
            class="${classes.input()} w-16 text-center ${classes.inputDefault()}"
            aria-label="Quantity"
            value="1"
            min="0"
            max="100"
          />
          <button
            type="button"
            class="xt-button text-2xs py-1 px-2.5 *** rounded-b${classes.groupRadius()} md:rounded-bl-none md:rounded-tr${classes.groupRadius()} *** ${classes.buttonPrimary()}"
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
