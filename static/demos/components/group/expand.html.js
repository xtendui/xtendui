const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--group-expand">
    <form class="text-sm">
      <div class="xt-list max-w-sm">
        <div class="inline-flex flex-auto">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} rounded-l${classes.groupRadius()} ${classes.buttonDefault()}"
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
          class="xt-button ${classes.buttonMd()} rounded-r${classes.groupRadius()} ${classes.buttonPrimary()}"
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