import path from 'path'
const buttonDefault = require('components/snippets/classes/button-default').default
const buttonPrimary = require('components/snippets/classes/button-primary').default
const inputDefault = require('components/snippets/classes/input-default').default
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

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
      Back
    </button>

    <div class="xt-list-inner flex-auto">
      <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-l-md ${buttonDefault()}">
        ${iconSearch({ classes: 'text-xl -my-1' })}
      </button>
      <input type="text" class="xt-input rounded-r-md ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
    </div>

    <div class="xt-list-inner">
      <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-l-md ${buttonDefault()}">
        Clear
      </button>
      <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-r-md ${buttonPrimary()}">
        Submit
      </button>
    </div>

  </div>
</form>
`
