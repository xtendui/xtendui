const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-tooltip>
      <div data-xt-tooltip-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        >
          Group
        </button>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textBlack()} ${classes.cardWhite()}"
          >
            <form class="text-sm">
              <div class="xt-list flex-nowrap max-w-sm">
                <div class="inline-flex flex-auto">
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} rounded-l${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  >
                    ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                  </button>
                  <input
                    type="text"
                    class="${classes.input()} ${classes.inputGray()}"
                    aria-label="Search"
                    placeholder="Seach Catalog"
                  />
                </div>

                <button
                  type="button"
                  class="xt-button ${classes.buttonMd()} rounded-r${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
