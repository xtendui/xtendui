import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-xs">

  <div class="xt-list xt-list-2 w-full justify-end" role="toolbar">

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
      Back
    </button>

    <div class="xt-list-inner flex-auto">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-l-md ${classes.buttonDefault()}">
        ${classes.iconSearch({ classes: 'text-xl -my-1' })}
      </button>
      <input type="text" class="xt-input rounded-r-md ${classes.inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
    </div>

    <div class="xt-list-inner">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-l-md ${classes.buttonDefault()}">
        Clear
      </button>
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-r-md ${classes.buttonPrimary()}">
        Submit
      </button>
    </div>

  </div>
</form>
`
