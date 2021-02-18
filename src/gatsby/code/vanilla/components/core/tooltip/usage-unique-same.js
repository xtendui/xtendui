import path from 'path'
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
Lorem ipsum <a href="#" data-xt-tooltip="{ targets: '#tooltip--unique-1, #tooltip--unique-2' }">dolor</a> sit amet

<div class="xt-tooltip p-2" id="tooltip--unique-1">
  <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
    Lorem ipsum dolor sit amet
  </div>
</div>
<div class="xt-tooltip p-2" id="tooltip--unique-2" data-xt-position="right-end">
  <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
    Consectetur adipiscing elit
  </div>
</div>
`
