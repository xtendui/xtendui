import path from 'path'
const buttonDefault = require('components/snippets/classes/button-default').default
const cardToggle = require('components/snippets/classes/card-toggle').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center demo--toggle-animation-inverse" data-xt-toggle="{ targets: ':scope > .xt-toggle-inverse, .xt-toggle-item > .xt-toggle-inverse' }">

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 0
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 1
  </button>

  <div class="xt-card xt-toggle-inverse rounded-md ${cardToggle()}" data-xt-duration="500">
    Target 0
  </div>

  <div class="xt-card xt-toggle-inverse rounded-md ${cardToggle()}" data-xt-duration="500">
    Target 1
  </div>

</div>
`
