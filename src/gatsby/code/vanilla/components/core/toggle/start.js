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
<div class="xt-list xt-list-3 items-center" data-xt-toggle>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 0
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()} in-toggle">
    Toggle 1
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 2
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 3
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
