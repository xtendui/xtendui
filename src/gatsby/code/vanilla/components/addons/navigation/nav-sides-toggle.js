import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
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
<div class="list list-2 items-center w-full" data-xt-toggle="{ navigation: '[data-xt-nav]' }">

  <button type="button" class="btn btn-md ${btnDefault()}">
    Toggle 0
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    Toggle 1
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    Toggle 2
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    Toggle 3
  </button>

  <button type="button" class="nav-sides left-0" data-xt-nav="-1" aria-label="Previous slide" data-xt-mouse-follow="{ targets: '.nav-sides-btn' }">
    <div class="nav-sides-btn mouse-follow text-black text-2xl">
      ${iconArrowLeft({ classes: 'icon-md' })}
    </div>
  </button>

  <button type="button" class="nav-sides right-0" data-xt-nav="1" aria-label="Next slide" data-xt-mouse-follow="{ targets: '.nav-sides-btn' }">
    <div class="nav-sides-btn mouse-follow text-black text-2xl">
      ${iconArrowRight({ classes: 'icon-md' })}
    </div>
  </button>

  <div class="card toggle ${cardToggle()}">
    Target 0
  </div>

  <div class="card toggle ${cardToggle()}">
    Target 1
  </div>

  <div class="card toggle ${cardToggle()}">
    Target 2
  </div>

  <div class="card toggle ${cardToggle()}">
    Target 3
  </div>

</div>
`
