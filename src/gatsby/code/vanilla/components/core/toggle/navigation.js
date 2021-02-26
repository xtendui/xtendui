import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const cardToggle = require('components/snippets/classes').cardToggle
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

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 0
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 1
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 2
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 3
  </button>

  <button type="button" class="xt-button ${buttonDefault()}" data-xt-nav="-1" title="Previous slide">
    ${iconArrowLeft({ classes: 'text-xl -my-1' })}
  </button>

  <button type="button" class="xt-button ${buttonDefault()}" data-xt-nav="1" title="Next slide">
    ${iconArrowRight({ classes: 'text-xl -my-1' })}
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
