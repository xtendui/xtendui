import path from 'path'
const markupSlider = require('components/snippets/components/markup-slider-others').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="slider"
    data-xt-slider="{ loop: false, jump: false, autoHeight: '.slides' }">
  ${indentString(markupSlider(), 2)}
</div>
`
