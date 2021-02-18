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
<div class="relative py-4 px-6 bg-primary-500">

  <div data-xt-tooltip>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      static
    </button>

    <div class="xt-tooltip p-2 xt-tooltip-static xt-tooltip-nospace">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</div>
`
