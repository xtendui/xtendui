const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-list *** xt-list-4 *** flex-col md:flex-row">
        <div class="inline-flex flex-auto">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} *** rounded${classes.groupRadius()} *** ${classes.buttonDefault()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>

          <input
            type="text"
            class="${classes.input()} *** rounded${classes.groupRadius()} rounded-l-none *** ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} *** rounded${classes.groupRadius()} *** ${classes.buttonPrimary()}"
        >
          Search
        </button>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
