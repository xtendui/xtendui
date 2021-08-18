const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-list flex-col">
        <div class="inline-flex">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded-tl${classes.groupRadius()} *** border border-r-0 border-b-0 border-gray-400 *** ${classes.buttonDefault()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input
            type="text"
            class="${classes.input()} rounded-tr${classes.groupRadius()} *** border border-b-0 border-gray-400 *** ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded-b${classes.cardRadius()} *** border border-gray-400 *** ${classes.buttonDefault()}"
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
