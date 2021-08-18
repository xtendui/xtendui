const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-list *** xt-list-4 *** flex-col md:flex-row">
        <div class="inline-flex flex-auto">
          <a
            href="#"
            type="submit"
            class="xt-button ${classes.buttonMd()} *** rounded${classes.groupRadius()} *** ${classes.buttonDefault()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </a>

          <input
            type="text"
            class="${classes.input()} *** rounded${classes.groupRadius()} rounded-l-none *** ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <a
          href="#"
          class="xt-button ${classes.buttonMd()} *** rounded${classes.groupRadius()} *** ${classes.buttonPrimary()}"
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
