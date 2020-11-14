import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const inputDefault = require('components/snippets/classes/input-default').default
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>

  <div class="list flex-col">

    <div class="list-inner">
      <button type="button" class="btn btn-md rounded-tl-md border border-gray-500 ${btnDefault()}">
        ${iconSearch({ classes: 'icon-lg' })}
      </button>
      <input type="text" class="form-item rounded-tr-md border border-l-0 border-gray-500 ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
    </div>

    <button type="button" class="btn btn-md rounded-b-md border border-t-0 border-gray-500 ${btnPrimary()}">
      Lorem ipsum
    </button>

  </div>

</form>
`
