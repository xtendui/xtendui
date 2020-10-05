import path from 'path'
const markupSlider = require('components/snippets/components/markup-slider-media').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="slider demo--slider-media-loaded" data-xt-slider="{ mediaLoaded: true, mediaLoadedReinit: true }">
${indentString(markupSlider(), 2)}
</div>
`
