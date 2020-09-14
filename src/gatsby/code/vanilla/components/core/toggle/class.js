import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const cardDefault = require('components/snippets/classes/card-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center"
     data-xt-toggle="{ class: 'active active-toggle demo--toggle-custom-class' }">

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle
  </button>

  <div class="card card-block card-block-small toggle ${cardDefault()}">
    Target
  </div>

</div>
`
