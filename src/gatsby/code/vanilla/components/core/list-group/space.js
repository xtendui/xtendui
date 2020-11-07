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

  <div class="list list-1">

    <div class="list-inner flex-auto">
      <button type="button" class="btn btn-md rounded-l-md ${btnDefaultGroup()}">
        ${iconSearch({ classes: 'icon-lg' })}
      </button>
      <input type="text" class="form-item rounded-r-md ${inputDefaultGroup()}" placeholder="Insert search query" />
    </div>

    <button type="button" class="btn btn-md ${btnPrimaryGroup()}">
      Search
    </button>

  </div>

</form>
`
