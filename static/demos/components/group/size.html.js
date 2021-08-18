const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-list flex-col md:flex-row *** max-w-sm ***">
        <div class="inline-flex flex-auto">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} rounded-tl${classes.groupRadius()} md:rounded-l${classes.groupRadius()} ${classes.buttonDefault()}"
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

        <a
          href="#"
          class="xt-button ${classes.buttonMd()} rounded-b${classes.groupRadius()} md:rounded-bl-none md:rounded-r${classes.groupRadius()} ${classes.buttonPrimary()}"
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
