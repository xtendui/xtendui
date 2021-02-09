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

  <div data-xt-tooltip="{ position: 'bottom' }">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      bottom
    </button>

    <div class="tooltip">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="tooltip-arrow" data-arrow></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'bottom-start' }">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      bottom start
    </button>

    <div class="tooltip">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="tooltip-arrow" data-arrow></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'bottom-end' }">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      bottom end
    </button>

    <div class="tooltip">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="tooltip-arrow" data-arrow></div>
    </div>

  </div>

</div>
`
