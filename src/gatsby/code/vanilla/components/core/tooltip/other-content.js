import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const inputDefault = require('components/snippets/classes').inputDefault
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-tooltip>

  <div class="xt-tooltip-item">

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      list group
    </button>

    <div class="xt-tooltip p-2">
      <div class="rounded-md shadow-tooltip text-black xt-links-default bg-white">
        <form class="text-sm">

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

  </div>

</div>
`
