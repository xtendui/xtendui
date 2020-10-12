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
<div class="h5 h-block rounded-md text-default bg-gray-200 text-center">
  Horizontal
</div>

<form>

  <div class="group group-number" data-xt-group-number>

    <button type="button" class="btn btn-md rounded-l-md border border-gray-500 ${btnDefaultGroup()}" data-xt-group-number-step="-1">
      -
    </button>

    <input type="number" class="form-item border border-l-0 border-gray-500 ${inputDefaultGroup()}" value="1" min="0" max="100">

    <button type="button" class="btn btn-md rounded-r-md border border-l-0 border-gray-500 ${btnDefaultGroup()}" data-xt-group-number-step="1">
      +
    </button>

  </div>

</form>

<div class="h5 h-block rounded-md text-default bg-gray-200 text-center">
  Vertical
</div>

<form>

  <div class="group" data-xt-group-number>

    <input type="number" class="form-item rounded-tl-md rounded-bl-md border border-r-0 border-gray-500 ${inputDefaultGroup()}" value="1" min="0" max="100">

    <div class="group-inner flex-col">
      <button type="button" class="btn btn-sm py-1 rounded-tr-md border border-gray-500 ${btnDefaultGroup()}" data-xt-group-number-step="1">
        +
      </button>
      <button type="button" class="btn btn-sm py-1 rounded-br-md border border-t-0 border-gray-500 ${btnDefaultGroup()}" data-xt-group-number-step="-1">
        -
      </button>
    </div>

  </div>

</form>
`
