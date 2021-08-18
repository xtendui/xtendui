const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-overlay>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-overlay-element
      >
        Group
      </button>

      <div class="xt-overlay" data-xt-overlay-target>
        <div class="xt-backdrop z-below bg-black opacity-25"></div>
        <div class="xt-overlay-container max-w-3xl">
          <button
            type="button"
            class="xt-button xt-dismiss fixed z-above top-0 right-0 p-5 text-2xl"
            aria-label="Close"
          >
            ${classes.iconX()}
          </button>
          <div class="xt-overlay-inner">
            <form class="text-sm rounded${classes.overlayCardRadius()} shadow-overlay">
              <div class="xt-list flex-nowrap max-w-sm">
                <div class="inline-flex flex-auto">
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} rounded-l${classes.groupButtonRadius()} ${classes.buttonDefault()}"
                  >
                    ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                  </button>
                  <input
                    type="text"
                    class="${classes.input()} ${classes.inputDefault()}"
                    aria-label="Search"
                    placeholder="Seach Catalog"
                  />
                </div>

                <button
                  type="button"
                  class="xt-button ${classes.buttonMd()} rounded-r${classes.groupButtonRadius()} ${classes.buttonPrimary()}"
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
