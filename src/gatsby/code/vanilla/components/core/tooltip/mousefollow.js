import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const tooltipMd = require('components/snippets/classes').tooltipMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardBlack = require('components/snippets/classes').cardBlack

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-tooltip="{ popperjs: false }" data-xt-mousefollow>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    mouse follow
  </button>

  <div class="xt-tooltip p-2 group xt-mousefollow" data-xt-duration="300">
    <div class="${tooltipMd()} rounded shadow-tooltip ${cardBlack()} -mt-1 ml-4 pointer-events-none transform transition duration-300 ease-in-out-quint opacity-0 translate-x-4 group-active:opacity-100 group-active:translate-x-0">
      Lorem ipsum dolor sit amet
    </div>
  </div>

</div>
`
