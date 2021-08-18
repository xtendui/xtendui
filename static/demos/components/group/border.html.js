const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-list flex-col md:flex-row">
        <div class="inline-flex flex-auto">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} rounded-tl${classes.groupRadius()} md:rounded-l${classes.groupRadius()} *** border border-b-0 md:border-b border-gray-300 *** ${classes.buttonDefault()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>

          <input
            type="text"
            class="${classes.input()} *** border border-b-0 border-l-0 md:border-b md:border-r-0 border-gray-300 *** ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <a
          href="#"
          class="xt-button ${classes.buttonMd()} rounded-b${classes.groupRadius()} md:rounded-bl-none md:rounded-r${classes.groupRadius()} *** border border-gray-300 *** ${classes.buttonDefault()}"
        >
          Search
        </a>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
