import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
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
              <input type="text" class="xt-input ${classes.inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
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
`
