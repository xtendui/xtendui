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
<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ class: 'in in-toggle demo--toggle-custom-class' }">

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle
  </button>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target
  </div>

</div>
`
