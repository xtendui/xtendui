import path from 'path'
const markupSlider = require('components/snippets/components/markup-slider').default
const indentString = require('indent-string')
const iconArrowLeft = require('components/snippets/icons').iconArrowLeft
const iconArrowRight = require('components/snippets/icons').iconArrowRight

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="slider" data-xt-slider>
${indentString(markupSlider(), 2)}
  <div class="nav-sides left-0" data-xt-nav="-1" aria-label="Previous slide" data-xt-mouse-follow="{ targets: '.nav-sides-btn' }">
    <div class="nav-sides-btn mouse-follow text-black text-2xl">
      ${iconArrowLeft({ classes: 'icon-md' })}
    </div>
  </div>

  <div class="nav-sides right-0" data-xt-nav="1" aria-label="Next slide" data-xt-mouse-follow="{ targets: '.nav-sides-btn' }">
    <div class="nav-sides-btn mouse-follow text-black text-2xl">
      ${iconArrowRight({ classes: 'icon-md' })}
    </div>
  </div>

</div>
`
