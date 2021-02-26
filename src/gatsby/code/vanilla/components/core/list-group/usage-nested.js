import path from 'path'

const buttonDefault = require('components/snippets/classes').buttonDefault
const inputDefault = require('components/snippets/classes').inputDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm">

  <div class="xt-list">

    <div class="xt-list-inner">
      <input type="number" class="xt-input rounded-tl-md rounded-bl-md border border-r-0 border-gray-500 ${inputDefault()}" aria-label="Quantity" value="1" min="0" max="100">
      <div class="xt-list-inner flex-col">
        <button type="button" class="xt-button text-2xs py-1.5 px-2.5 rounded-tr-md border border-gray-500 ${buttonDefault()}">
          +
        </button>
        <button type="button" class="xt-button text-2xs py-1.5 px-2.5 rounded-br-md border border-t-0 border-gray-500 ${buttonDefault()}">
          -
        </button>
      </div>
    </div>

  </div>

</form>
`
