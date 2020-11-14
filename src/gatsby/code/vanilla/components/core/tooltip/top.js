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

  <div data-xt-tooltip="{ position: 'top' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      top
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="tooltip-arrow" data-arrow></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'top-start' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      top start
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="tooltip-arrow" data-arrow></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'top-end' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      top end
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="tooltip-arrow" data-arrow></div>
    </div>

  </div>

</div>
`
