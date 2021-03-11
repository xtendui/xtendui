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

  <div class="xt-list xt-list-2 flex-col">

    <div class="xt-list-inner">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-tl-md rounded-bl-md ${classes.buttonDefault()}">
        ${classes.iconSearch({ classes: 'text-xl -my-1' })}
      </button>
      <input type="text" class="xt-input rounded-tr-md rounded-br-md ${classes.inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
    </div>

    <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonPrimary()}">
      Search
    </button>

  </div>

</form>
`
