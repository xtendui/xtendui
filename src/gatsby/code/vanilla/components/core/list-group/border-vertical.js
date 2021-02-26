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
<form class="text-sm">

  <div class="xt-list flex-col">

    <div class="xt-list-inner">
      <button type="button" class="xt-button ${buttonMd()} rounded-tl-md border border-gray-500 ${buttonDefault()}">
        ${iconSearch({ classes: 'text-xl -my-1' })}
      </button>
      <input type="text" class="xt-input rounded-tr-md border border-l-0 border-gray-500 ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
    </div>

    <button type="button" class="xt-button ${buttonMd()} rounded-b-md border border-t-0 border-gray-500 ${buttonPrimary()}">
      Lorem ipsum
    </button>

  </div>

</form>
`
