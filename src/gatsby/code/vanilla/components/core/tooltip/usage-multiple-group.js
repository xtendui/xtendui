import path from 'path'
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-tooltip>

  Lorem ipsum

  <div class="xt-tooltip-container" data-xt-group="my-group">

    <a href="#">dolor</a>

    <div class="xt-tooltip p-2" data-xt-group="my-group">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

    <div class="xt-tooltip p-2" data-xt-position="right-end" data-xt-group="my-group">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Consectetur adipiscing elit
      </div>
    </div>

  </div>

  sit

  <div class="xt-tooltip-container">

    <a href="#">amet</a>

    <div class="xt-tooltip p-2">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</div>
`
