import path from 'path'
const buttonDefaultGroup = require('components/snippets/classes/button-default-group').default
const buttonPrimaryGroup = require('components/snippets/classes/button-primary-group').default
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm">

  <button type="button" class="xt-list group">

    <div class="xt-button text-xs py-2 px-3.5 rounded-l-md ${buttonPrimaryGroup()}">
      Search
    </div>

    <div class="xt-button text-xs py-2 px-3.5 rounded-r-md ${buttonDefaultGroup()}">
      ${iconSearch({ classes: 'text-xl -my-1' })}
    </div>

  </button>

</form>
`
