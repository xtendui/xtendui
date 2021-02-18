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

  <div data-xt-tooltip="{ position: 'left' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      left<br/>...
    </button>

    <div class="xt-tooltip p-2">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black"></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'left-start' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      left start<br/>...
    </button>

    <div class="xt-tooltip p-2">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black"></div>
    </div>

  </div>

  <div data-xt-tooltip="{ position: 'left-end' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      left end<br/>...
    </button>

    <div class="xt-tooltip p-2">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black"></div>
    </div>

  </div>

</div>
`
