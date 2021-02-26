import path from 'path'

const markupSlider = require('components/snippets/markup-slider-navigation').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-slider" data-xt-slider>
${indentString(markupSlider(), 2)}
</div>
`
