import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const inputDefault = require('components/snippets/classes').inputDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Horizontal
</div>

<form class="text-sm">

  <div class="xt-list" data-xt-groupnumber>

    <div class="xt-list-inner">
      <button type="button" class="xt-button ${buttonMd()} rounded-l-md border border-gray-500 ${buttonDefault()}" data-xt-step="-1">
        -
      </button>
      <input type="number" class="xt-input border border-l-0 border-gray-500 ${inputDefault()}" aria-label="Quantity" value="1" min="0" max="100">
      <button type="button" class="xt-button ${buttonMd()} rounded-r-md border border-l-0 border-gray-500 ${buttonDefault()}" data-xt-step="1">
        +
      </button>
    </div>

  </div>

</form>

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Vertical
</div>

<form class="text-sm">

  <div class="xt-list" data-xt-groupnumber>

    <div class="xt-list-inner">
      <input type="number" class="xt-input rounded-tl-md rounded-bl-md border border-r-0 border-gray-500 ${inputDefault()}" aria-label="Quantity" value="1" min="0" max="100">
      <div class="xt-list-inner flex-col">
        <button type="button" class="xt-button text-2xs py-1.5 px-2.5 rounded-tr-md border border-gray-500 ${buttonDefault()}" data-xt-step="1">
          +
        </button>
        <button type="button" class="xt-button text-2xs py-1.5 px-2.5 rounded-br-md border border-t-0 border-gray-500 ${buttonDefault()}" data-xt-step="-1">
          -
        </button>
      </div>
    </div>

  </div>

</form>
`
