const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--group-expand">
    <form class="text-sm">
      <div class="xt-list max-w-sm">
        <div class="inline-flex flex-auto">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} rounded-l${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input
            type="text"
            class="${classes.input()} ${classes.inputGray()}"
            aria-label="Search"
            placeholder="Seach Catalog" />
        </div>

        <a
          href="/"
          class="xt-button ${classes.buttonMd()} rounded-r${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
          Search
        </a>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
