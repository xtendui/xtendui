import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const buttonDefault = require('components/snippets/classes').buttonDefault
const inputDefault = require('components/snippets/classes').inputDefault
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-drop>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    list group
  </button>

  <div class="xt-drop p-4">
    <form class="rounded-md shadow-drop">

      <div class="xt-list flex-nowrap max-w-sm">

        <div class="xt-list-inner flex-auto">
          <button type="button" class="xt-button ${buttonMd()} rounded-l-md ${buttonDefault()}">
            ${iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input type="text" class="xt-input ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
        </div>

        <button type="button" class="xt-button ${buttonMd()} rounded-r-md ${buttonPrimary()}">
          Search
        </button>

      </div>

    </form>
  </div>

</div>
`
