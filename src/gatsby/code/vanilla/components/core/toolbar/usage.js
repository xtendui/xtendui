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
<form class="text-xs">

  <div class="xt-list xt-list-2 w-full justify-end" role="toolbar">

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
      Back
    </button>

    <div class="xt-list-inner flex-auto">
      <button type="button" class="xt-button ${buttonMd()} rounded-l-md ${buttonDefault()}">
        ${iconSearch({ classes: 'text-xl -my-1' })}
      </button>
      <input type="text" class="xt-input rounded-r-md ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
    </div>

    <div class="xt-list-inner">
      <button type="button" class="xt-button ${buttonMd()} rounded-l-md ${buttonDefault()}">
        Clear
      </button>
      <button type="button" class="xt-button ${buttonMd()} rounded-r-md ${buttonPrimary()}">
        Submit
      </button>
    </div>

  </div>
</form>
`
