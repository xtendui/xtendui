const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-overlay>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-overlay-element>
        Group
      </button>

      <div class="xt-overlay" data-xt-overlay-target>
        <div class="xt-backdrop z-below bg-gray-800 opacity-25"></div>
        <div class="xt-overlay-container max-w-3xl">
          <button
            type="button"
            class="xt-button xt-dismiss fixed z-above top-0 right-0 p-5 text-2xl"
            aria-label="Close">
            ${classes.iconX()}
          </button>
          <div class="xt-overlay-inner">
            <form class="text-sm rounded${classes.overlayRadius()} ${classes.overlayShadow()}">
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
    </div>
  </div>
`

export const object = {
  html: html,
}
