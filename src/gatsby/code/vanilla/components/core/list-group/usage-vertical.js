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
<form class="text-sm">

  <div class="xt-list flex-col">

    <div class="xt-list-inner">
      <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-tl-md ${buttonDefault()}">
        ${iconSearch({ classes: 'text-xl -my-1' })}
      </button>
      <input type="text" class="xt-input rounded-tr-md ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
    </div>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-b-md ${buttonPrimary()}">
      Search
    </button>

  </div>

</form>
`
