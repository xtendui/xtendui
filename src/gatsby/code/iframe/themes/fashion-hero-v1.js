import React from 'react'
import path from 'path'
const markupSliderHero = require('components/snippets/themes/markup-slider-hero').default
const indentString = require('indent-string')
const iconArrowLeft = require('components/snippets/icons').iconArrowLeft
const iconArrowRight = require('components/snippets/icons').iconArrowRight

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="slider">
${indentString(markupSliderHero(), 2)}
  <div class="slider-navigation-sides left-0" data-xt-nav="-1" aria-label="Previous slide" data-xt-mouse-follow="{ targets: '.slider-navigation-sides-btn' }">
    <div class="slider-navigation-sides-btn mouse-follow text-white text-2xl">
      ${iconArrowLeft({ classes: 'icon-md' })}
    </div>
  </div>

  <div class="slider-navigation-sides right-0" data-xt-nav="1" aria-label="Next slide" data-xt-mouse-follow="{ targets: '.slider-navigation-sides-btn' }">
    <div class="slider-navigation-sides-btn mouse-follow text-white text-2xl">
      ${iconArrowRight({ classes: 'icon-md' })}
    </div>
  </div>

  <nav class="slider-pagination w-full list list-2 hidden">
    <button type="button" class="btn xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
