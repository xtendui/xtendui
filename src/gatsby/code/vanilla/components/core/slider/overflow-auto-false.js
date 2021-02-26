import path from 'path'

const markupSlider = require('components/snippets/markup-slider-overflow').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-slider" data-xt-slider="{ align: 'left', drag: { wrap: true, overflow: false }, overflowAuto: false }">
${indentString(markupSlider(), 2)}
</div>
`
