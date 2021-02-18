import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-tooltip>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      tooltip
    </button>

    <div class="xt-tooltip p-2 group" data-xt-duration="300">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()} transform transition duration-300 opacity-0 -translate-x-2 group-active:opacity-100 group-active:translate-x-0">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</div>
`
