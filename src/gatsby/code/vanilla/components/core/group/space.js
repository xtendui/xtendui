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
      <button type="button" class="btn btn-md rounded-l-md ${btnDefaultGroup()}">
        <span class="icon-search"></span>
      </button>
      <input type="text" class="form-item rounded-r-md ${inputDefaultGroup()}" placeholder="Lorem ipsum" />
    </div>

    <button type="button" class="btn btn-md rounded-md ml-2 ${btnPrimaryGroup()}">
      Search
    </button>

  </div>

</form>
`
