const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="*** xt-list flex-nowrap ***">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} *** rounded-l-md border border-r-0 border-gray-400 *** ${classes.buttonDefault()}"
        >
          ${classes.iconSearch({ classes: 'text-xl -my-1' })}
        </button>

        <input
          type="text"
          class="${classes.input()} *** border border-r-0 border-gray-400 *** ${classes.inputDefault()}"
          aria-label="Search"
          placeholder="Seach Catalog"
        />

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} *** rounded-r-md border border-gray-400 *** ${classes.buttonDefault()}"
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
