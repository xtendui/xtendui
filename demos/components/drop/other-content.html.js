const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-drop>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-drop-element>
        Group
      </button>

      <div class="xt-drop p-3" data-xt-drop-target>
        <form class="${classes.dropRadius()} ${classes.dropShadow()} text-sm">
          <div class="xt-list flex-nowrap max-w-sm">
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

            <button
              type="submit"
              class="xt-button ${classes.buttonMd()} rounded-r${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
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
