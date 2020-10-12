import path from 'path'
const btnDefaultGroup = require('components/snippets/classes/btn-default-group').default
const btnPrimaryGroup = require('components/snippets/classes/btn-primary-group').default
const inputDefaultGroup = require('components/snippets/classes/input-default-group').default
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>

  <div class="group max-w-full" style="width: 35rem">

    <button type="button" class="btn btn-md rounded-l-md ${btnDefaultGroup()}">
      ${iconSearch({ classes: 'icon-lg' })}
    </button>

    <input type="text" class="form-item ${inputDefaultGroup()}" placeholder="Insert search query" />

    <button type="button" class="btn btn-md rounded-r-md ${btnPrimaryGroup()}">
      Search
    </button>

  </div>

</form>
`
