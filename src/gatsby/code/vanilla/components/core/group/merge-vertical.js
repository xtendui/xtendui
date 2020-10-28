import path from 'path'
const btnDefaultGroup = require('components/snippets/classes/btn-default-group').default
const btnPrimaryGroup = require('components/snippets/classes/btn-primary-group').default
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>

  <button type="button" class="list flex-col"
    data-xt-propagate-interaction="{ targets: '.btn' }">

    <div class="btn btn-md rounded-t-md ${btnPrimaryGroup()}">
      Search
    </div>

    <div class="btn btn-md rounded-b-md ${btnDefaultGroup()}">
      ${iconSearch({ classes: 'icon-lg' })}
    </div>

  </button>

</form>
`
