import path from 'path'
const btnDefaultGroup = require('components/snippets/classes/btn-default-group').default
const btnPrimaryGroup = require('components/snippets/classes/btn-primary-group').default
const inputDefaultGroup = require('components/snippets/classes/input-default-group').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>

  <div class="group">

    <div class="group-inner">
      <button type="button" class="btn btn-md rounded-l-md border border-gray-500 ${btnDefaultGroup()}">
        <span class="icon-search"></span>
      </button>
      <input type="text" class="form-item border border-l-0 border-gray-500 ${inputDefaultGroup()}" placeholder="Insert search query" />
    </div>

    <button type="button" class="btn btn-md rounded-r-md border border-l-0 border-gray-500 ${btnPrimaryGroup()}">
      Lorem ipsum
    </button>

  </div>

</form>
`
