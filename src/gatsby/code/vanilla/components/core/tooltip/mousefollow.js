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
<div class="inline-block" data-xt-tooltip="{ popperjs: false }" data-xt-mousefollow>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
    mouse follow
  </button>

  <div class="tooltip group mousefollow" data-xt-duration="300">
    <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()} -mt-1 ml-4 pointer-events-none transform transition duration-300 ease-in-out-quint opacity-0 translate-x-2 group-active:opacity-100 group-active:translate-x-0">
      Lorem ipsum dolor sit amet
    </div>
  </div>

</div>
`
