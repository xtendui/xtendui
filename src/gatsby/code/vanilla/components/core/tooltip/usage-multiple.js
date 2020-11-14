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

  Lorem ipsum <a href="#">dolor</a> sit <a href="#">amet</a>

  <div class="tooltip">
    <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

  <div class="tooltip">
    <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
      Consectetur adipiscing elit
    </div>
  </div>

</div>
`
