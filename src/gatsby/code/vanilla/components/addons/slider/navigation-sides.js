import path from 'path'
const markupSlider = require('components/snippets/components/markup-slider').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="slider"
    data-xt-slider>
${indentString(markupSlider(), 2)}
  <div class="slider-navigation-sides left-0" data-xt-nav="-1" aria-label="Previous slide"
    data-xt-mouse-follow="{ targets: '.slider-navigation-sides-btn' }">
    <div class="slider-navigation-sides-btn mouse-follow text-black text-2xl">
      <span class="block icon-chevron-left"></span>
    </div>
  </div>

  <div class="slider-navigation-sides right-0" data-xt-nav="1" aria-label="Next slide"
    data-xt-mouse-follow="{ targets: '.slider-navigation-sides-btn' }">
    <div class="slider-navigation-sides-btn mouse-follow text-black text-2xl">
      <span class="block icon-chevron-right"></span>
    </div>
  </div>

</div>
`
