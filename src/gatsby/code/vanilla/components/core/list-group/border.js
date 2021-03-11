import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm">

  <div class="xt-list flex-nowrap">

    <div class="xt-list-inner flex-auto">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-l-md border border-gray-500 ${classes.buttonDefault()}">
        ${classes.iconSearch({ classes: 'text-xl -my-1' })}
      </button>
      <input type="text" class="xt-input border border-l-0 border-gray-500 ${classes.inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
    </div>

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-r-md border border-l-0 border-gray-500 ${classes.buttonPrimary()}">
      Lorem ipsum
    </button>

  </div>

</form>
`
