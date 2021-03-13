const moduleParents = Object.values(require.cache).filter(m => m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div data-xt-overlay>
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        list group
      </button>

      <div class="xt-overlay">
        <div class="xt-backdrop bg-black opacity-25"></div>
        <div class="xt-overlay-container max-w-3xl">
          <button type="button" class="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
            ${classes.iconX()}
          </button>
          <div class="xt-overlay-inner">
            <form class="text-sm rounded-md shadow-overlay">
              <div class="xt-list flex-nowrap max-w-sm">
                <div class="xt-list-inner flex-auto">
                  <button type="button" class="xt-button ${classes.buttonMd()} rounded-l-md ${classes.buttonDefault()}">
                    ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                  </button>
                  <input
                    type="text"
                    class="xt-input ${classes.inputDefault()}"
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
    </div>
  </div>
`

export const object = {
  html: html,
}
