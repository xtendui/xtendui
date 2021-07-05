const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-drop>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-drop-element
      >
        list group
      </button>

      <div class="xt-drop off:hidden out:pointer-events-none p-4" data-xt-drop-target>
        <form class="${classes.cardRadius()} shadow-drop text-sm">
          <div class="xt-list flex-nowrap max-w-sm">
            <div class="xt-list-inner flex-auto">
              <button type="button" class="xt-button ${classes.buttonMd()} rounded-l-md ${classes.buttonDefault()}">
                ${classes.iconSearch({ classes: 'text-xl -my-1' })}
              </button>
              <input
                type="text"
                class="${classes.input()} ${classes.inputDefault()}"
                aria-label="Search"
                placeholder="Seach Catalog"
              />
            </div>

            <button type="button" class="xt-button ${classes.buttonMd()} rounded-r-md ${classes.buttonPrimary()}">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
