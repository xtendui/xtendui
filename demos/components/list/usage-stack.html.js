const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list xt-list-3 *** flex-col ***">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
        Lorem Ipsum
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
        Dolor sit
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
        Amet
      </button>

      <form class="text-sm *** inline-flex ***">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded-l${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
          ${classes.iconSearch({ classes: 'text-xl -my-1' })}
        </button>
        <input
          type="text"
          class="${classes.input()} rounded-r${classes.groupButtonRadius()} ${classes.inputGray()}"
          aria-label="Search"
          placeholder="Seach Catalog" />
      </form>
    </nav>
  </div>
`

export const object = {
  html: html,
}
