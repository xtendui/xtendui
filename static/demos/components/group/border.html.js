const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-list flex-col md:flex-row md:flex-nowrap">
        <div class="inline-flex flex-auto">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} rounded-tl${classes.groupButtonRadius()} md:rounded-l${classes.groupButtonRadius()} *** border border-b-0 md:border-b border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>

          <input
            type="text"
            class="${classes.input()} *** border border-b-0 border-l-0 md:border-b md:border-r-0 border-gray-300 *** ${classes.inputGray()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <a
          href="#"
          class="xt-button ${classes.buttonMd()} rounded-b${classes.groupButtonRadius()} md:rounded-bl-none md:rounded-r${classes.groupButtonRadius()} *** border border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
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
