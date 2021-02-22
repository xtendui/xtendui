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

  <div data-xt-tooltip="{ backdrop: true }">

    <div class="xt-tooltip-item">

      <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
        backdrop
      </button>

      <div class="xt-tooltip p-2">
       <div class="xt-backdrop xt-tooltip-ui bg-black opacity-25"></div>
        <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
          Lorem ipsum dolor sit amet
        </div>
        <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
      </div>

    </div>

  </div>

  <div data-xt-tooltip="{ on: 'click', off: 'click', backdrop: true }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      backdrop click
    </button>

    <div class="xt-tooltip p-2">
      <div class="xt-backdrop xt-tooltip-ui bg-black opacity-25"></div>
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
    </div>

  </div>

</div>
`
