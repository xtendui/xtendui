const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-xs">
      <div class="xt-list xt-list-2 justify-between">
        <div class="inline-flex *** group ***">
          <a
            href="#"
            class="xt-button ${classes.buttonMd()} rounded-l${classes.groupRadius()} ${classes.buttonDefaultGroup()}"
          >
            Back
          </a>
          <a
            href="#"
            class="xt-button ${classes.buttonMd()} rounded-r${classes.groupRadius()} ${classes.buttonPrimaryGroup()}"
          >
            Clear
          </a>
        </div>

        <div class="inline-flex flex-auto">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} rounded-l${classes.groupRadius()} ${classes.buttonDefault()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input
            type="text"
            class="${classes.input()} rounded-r${classes.groupRadius()} ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
