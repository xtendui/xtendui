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

  <button type="button" class="xt-list group">

    <div class="xt-button ${classes.buttonMd()} rounded-l-md ${classes.buttonPrimaryGroup()}">
      Search
    </div>

    <div class="xt-button ${classes.buttonMd()} rounded-r-md ${classes.buttonDefaultGroup()}">
      ${classes.iconSearch({ classes: 'text-xl -my-1' })}
    </div>

  </button>

</form>
`
