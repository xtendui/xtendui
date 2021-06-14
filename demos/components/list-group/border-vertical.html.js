const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-list flex-col">
        <div class="xt-list-inner">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} *** rounded-tl-md border border-gray-500 *** ${classes.buttonDefault()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input
            type="text"
            class="${classes.input()} *** rounded-tr-md border border-l-0 border-gray-500 *** ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} *** rounded-b-md border border-t-0 border-gray-500 *** ${classes.buttonPrimary()}"
        >
          Lorem ipsum
        </button>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
