const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-list *** xt-list-2 flex-col ***">
        <div class="inline-flex">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded-tl${classes.groupRadius()} rounded-bl${classes.groupRadius()} ${classes.buttonDefault()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input
            type="text"
            class="${classes.input()} rounded-tr${classes.groupRadius()} rounded-br${classes.groupRadius()} ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.groupRadius()} ${classes.buttonPrimary()}"
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
