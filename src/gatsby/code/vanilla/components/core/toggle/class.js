import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const cardToggle = require('components/snippets/classes/card-toggle').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center w-full" data-xt-toggle="{ class: 'active active-toggle demo--toggle-custom-class' }">

  <button type="button" class="btn btn-md ${btnDefault()}">
    Toggle
  </button>

  <div class="card toggle ${cardToggle()}">
    Target
  </div>

</div>
`
