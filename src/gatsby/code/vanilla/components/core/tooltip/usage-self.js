import path from 'path'
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
Lorem ipsum
<span data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">
  <a href="#">dolor</a>
  <div class="tooltip">
    <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>
</span>
sit amet
`
