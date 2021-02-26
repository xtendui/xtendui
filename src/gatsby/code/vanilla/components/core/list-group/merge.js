import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefaultGroup = require('components/snippets/classes').buttonDefaultGroup
const buttonPrimaryGroup = require('components/snippets/classes').buttonPrimaryGroup
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

    <div class="xt-button ${buttonMd()} rounded-l-md ${buttonPrimaryGroup()}">
      Search
    </div>

    <div class="xt-button ${buttonMd()} rounded-r-md ${buttonDefaultGroup()}">
      ${iconSearch({ classes: 'text-xl -my-1' })}
    </div>

  </button>

</form>
`
