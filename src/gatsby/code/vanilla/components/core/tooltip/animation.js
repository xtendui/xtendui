import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-tooltip>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      tooltip
    </button>

    <div class="tooltip group" data-xt-duration="300">
      <div class="tooltip-md rounded shadow-tooltip ${cardBlack()} transform transition duration-300 opacity-0 -translate-x-2 group-active:opacity-100 group-active:translate-x-0">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</div>
`
