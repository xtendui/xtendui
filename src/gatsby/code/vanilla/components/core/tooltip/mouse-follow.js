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
<div class="inline-block" data-xt-tooltip="{ popperjs: false }" data-xt-mouse-follow>

  <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
    mouse follow
  </button>

  <div class="tooltip group mouse-follow">
    <div class="tooltip-md rounded shadow-tooltip ${cardBlack()} -mt-1 ml-4 pointer-events-none opacity-0 transition group-active:opacity-100">
      Lorem ipsum dolor sit amet
    </div>
  </div>

</div>
`
