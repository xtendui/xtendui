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
<div class="list list-1 w-full" role="toolbar">

  <button type="button" class="btn btn-md rounded-md ${btnDefaultGroup()}">
    Back
  </button>

  <div class="list-inner">
    <button type="button" class="btn btn-md rounded-l-md ${btnDefaultGroup()}">
      ${iconSearch({ classes: 'icon-lg' })}
    </button>
    <input type="text" class="form-item rounded-r-md ${inputDefaultGroup()}" placeholder="Insert search query" />
  </div>

  <div class="list-inner ml-auto">
    <button type="button" class="btn btn-md rounded-l-md ${btnDefaultGroup()}">
      Clear
    </button>
    <button type="button" class="btn btn-md rounded-r-md ${btnPrimaryGroup()}">
      Submit
    </button>
  </div>

</div>
`
