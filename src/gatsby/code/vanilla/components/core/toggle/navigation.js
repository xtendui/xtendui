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
<div class="list list-2 items-center" data-xt-toggle="{ navigation: '[data-xt-nav]' }">

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

  <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
    ${iconArrowLeft({ classes: 'icon-lg' })}
  </button>

  <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
    ${iconArrowRight({ classes: 'icon-lg' })}
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
