import path from 'path'
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="inline-block demo--tooltip-disable" data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button', matches: { '(max-width: 767px)': { disabled: true }, '(min-width: 768px)': { position: 'top-start' } } }">

  Lorem ipsum <a href="#">dolor</a> sit amet

  <div class="tooltip">
    <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

</div>
`
