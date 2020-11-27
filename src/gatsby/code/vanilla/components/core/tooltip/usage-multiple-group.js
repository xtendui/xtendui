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

  Lorem ipsum <a href="#" data-xt-group="my-group">dolor</a> sit <a href="#" data-xt-group="another-group">amet</a>

  <div class="tooltip" data-xt-group="another-group">
    <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

  <div class="tooltip" data-xt-group="my-group">
    <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

  <div class="tooltip" data-xt-position="bottom" data-xt-group="my-group">
    <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
      Consectetur adipiscing elit
    </div>
  </div>

</div>
`
