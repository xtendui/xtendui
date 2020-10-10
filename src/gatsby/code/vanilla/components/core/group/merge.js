import path from 'path'
const btnDefaultGroup = require('components/snippets/classes/btn-default-group').default
const btnPrimaryGroup = require('components/snippets/classes/btn-primary-group').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>

  <button type="button" class="group"
    data-xt-propagate-interaction="{ targets: '.btn' }">

    <div class="btn btn-md rounded-l-md ${btnPrimaryGroup()}">
      Search
    </div>

    <div class="btn btn-md rounded-r-md ${btnDefaultGroup()}">
      <span class="icon-search"></span>
    </div>

  </button>

</form>
`
