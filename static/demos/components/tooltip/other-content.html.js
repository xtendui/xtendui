const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip>
      <div data-xt-tooltip-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          Group
        </button>

        <div class="xt-tooltip p-2" data-xt-tooltip-target>
          <div class="rounded${classes.tooltipRadius()} shadow-tooltip text-black xt-links-default bg-white">
            <form class="text-sm">
              <div class="xt-list flex-nowrap max-w-sm">
                <div class="inline-flex flex-auto">
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} rounded-l${classes.groupRadius()} ${classes.buttonDefault()}"
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
                  class="xt-button ${classes.buttonMd()} rounded-r${classes.groupRadius()} ${classes.buttonPrimary()}"
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
