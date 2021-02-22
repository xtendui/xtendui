import path from 'path'
const buttonDefault = require('components/snippets/classes/button-default').default
const cardToggle = require('components/snippets/classes/card-toggle').default
const iconArrowLeft = require('components/snippets/icons').iconArrowLeft
const iconArrowRight = require('components/snippets/icons').iconArrowRight

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ navigation: '[data-xt-nav]' }">

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 0
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 1
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 2
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 3
  </button>

  <button type="button" class="xt-slider-ui hidden md:block cursor-none z-above absolute top-0 left-0 w-24 h-full group" data-xt-nav="-1" aria-label="Previous slide" data-xt-mousefollow>
    <div class="xt-mousefollow text-black text-2xl transition-opacity opacity-0 active:opacity-100">
      ${iconArrowLeft({ classes: 'transform transition-all group-active:opacity-75 group-active:scale-75' })}
    </div>
  </button>

  <button type="button" class="xt-slider-ui hidden md:block cursor-none z-above absolute top-0 right-0 w-24 h-full group" data-xt-nav="1" aria-label="Next slide" data-xt-mousefollow>
    <div class="xt-mousefollow text-black text-2xl transition-opacity opacity-0 active:opacity-100">
      ${iconArrowRight({ classes: 'transform transition-all group-active:opacity-75 group-active:scale-75' })}
    </div>
  </button>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 0
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 1
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 2
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 3
  </div>

</div>
`
