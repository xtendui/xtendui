import path from 'path'
const btnDefaultGroup = require('components/snippets/classes/btn-default-group').default
const inputDefaultGroup = require('components/snippets/classes/input-default-group').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>

  <div class="list">

    <div class="list-inner">
      <input type="number" class="form-item rounded-tl-md rounded-bl-md border border-r-0 border-gray-500 ${inputDefaultGroup()}" aria-label="Quantity" value="1" min="0" max="100">
      <div class="list-inner flex-col">
        <button type="button" class="btn btn-sm py-1 rounded-tr-md border border-gray-500 ${btnDefaultGroup()}">
          +
        </button>
        <button type="button" class="btn btn-sm py-1 rounded-br-md border border-t-0 border-gray-500 ${btnDefaultGroup()}">
          -
        </button>
      </div>
    </div>

  </div>

</form>
`
