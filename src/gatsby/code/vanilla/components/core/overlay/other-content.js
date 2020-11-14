import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefault = require('components/snippets/classes/btn-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const iconSearch = require('components/snippets/icons').iconSearch
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-overlay>

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      list group
    </button>

    <div class="overlay">
      <div class="overlay-container max-w-3xl">
        <div class="btn btn-close p-5 text-2xl fixed z-last mr-2" aria-label="Close">
          ${iconX()}
        </div>
        <div class="overlay-inner">

          <form class="rounded-md shadow-overlay">

            <div class="list flex-nowrap max-w-sm">

              <div class="list-inner flex-auto">
                <button type="button" class="btn btn-md rounded-l-md ${btnDefault()}">
                  ${iconSearch({ classes: 'icon-lg' })}
                </button>
                <input type="text" class="form-item ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
              </div>

              <button type="button" class="btn btn-md rounded-r-md ${btnPrimary()}">
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
