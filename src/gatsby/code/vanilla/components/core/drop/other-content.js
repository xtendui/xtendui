import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const buttonDefault = require('components/snippets/classes/button-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-drop>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      list group
    </button>

    <div class="xt-drop">
      <form class="rounded-md shadow-drop">

        <div class="xt-list flex-nowrap max-w-sm">

          <div class="xt-list-inner flex-auto">
            <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-l-md ${buttonDefault()}">
              ${iconSearch({ classes: 'text-xl -my-1' })}
            </button>
            <input type="text" class="xt-input ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
          </div>

          <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-r-md ${buttonPrimary()}">
            Search
          </button>

        </div>

      </form>
    </div>

  </div>

</div>
`
