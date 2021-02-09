import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const inputDefault = require('components/snippets/classes/input-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="h6 my-6 mt-fc mb-lc py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Horizontal
</div>

<form>

  <div class="list" data-xt-groupnumber>

    <div class="list-inner">
      <button type="button" class="btn text-xs py-2 px-3.5 rounded-l-md border border-gray-500 ${btnDefault()}" data-xt-step="-1">
        -
      </button>
      <input type="number" class="form-item border border-l-0 border-gray-500 ${inputDefault()}" aria-label="Quantity" value="1" min="0" max="100">
      <button type="button" class="btn text-xs py-2 px-3.5 rounded-r-md border border-l-0 border-gray-500 ${btnDefault()}" data-xt-step="1">
        +
      </button>
    </div>

  </div>

</form>

<div class="h6 my-6 mt-fc mb-lc py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Vertical
</div>

<form>

  <div class="list" data-xt-groupnumber>

    <div class="list-inner">
      <input type="number" class="form-item rounded-tl-md rounded-bl-md border border-r-0 border-gray-500 ${inputDefault()}" aria-label="Quantity" value="1" min="0" max="100">
      <div class="list-inner flex-col">
        <button type="button" class="btn text-2xs py-1 px-2.5 rounded-tr-md border border-gray-500 ${btnDefault()}" data-xt-step="1">
          +
        </button>
        <button type="button" class="btn text-2xs py-1 px-2.5 rounded-br-md border border-t-0 border-gray-500 ${btnDefault()}" data-xt-step="-1">
          -
        </button>
      </div>
    </div>

  </div>

</form>
`
