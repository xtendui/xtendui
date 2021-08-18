const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="*** xt-list flex-col ***">
        <div class="*** inline-flex ***">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} *** rounded-tl${classes.groupRadius()} *** ${classes.buttonDefault()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input
            type="text"
            class="${classes.input()} *** rounded-tr${classes.groupRadius()} *** ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <a
          href="#"
          class="xt-button ${classes.buttonMd()} *** rounded-b${classes.groupRadius()} *** ${classes.buttonPrimary()}"
        >
          Search
        </a>
      </div>
    </form>

    <form class="text-sm mt-6">
      <div class="*** xt-list ***">
        <input
          type="number"
          class="${classes.input()} w-16 text-center *** rounded-tl${classes.groupRadius()} rounded-bl${classes.groupRadius()} *** ${classes.inputDefault()}"
          aria-label="Quantity"
          value="1"
          min="0"
          max="100"
        />
        <div class="*** inline-flex flex-col ***">
          <a
            href="#"
            class="xt-button text-2xs py-1 px-2.5 *** rounded-tr${classes.groupRadius()} *** ${classes.buttonPrimary()}"
          >
            +
          </a>
          <a
            href="#"
            class="xt-button text-2xs py-1 px-2.5 *** rounded-br${classes.groupRadius()} *** ${classes.buttonPrimary()}"
          >
            -
          </a>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
