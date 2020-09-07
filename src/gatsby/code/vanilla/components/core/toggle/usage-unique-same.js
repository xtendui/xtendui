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
<div class="list list-space-2 items-center">

  <button type="button" class="btn btn-medium ${btnDefault()}"
    data-xt-toggle="{ targets: '#toggle--unique-2, #toggle--unique-3' }">
    Toggle same
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}"
          data-xt-toggle="{ targets: '#toggle--unique-2, #toggle--unique-3' }">
    Toggle same
  </button>

  <div class="card toggle ${cardDefault()}" id="toggle--unique-2">
    <div class="card-block card-block-small">
      Target 0
    </div>
  </div>

  <div class="card toggle ${cardDefault()}" id="toggle--unique-3">
    <div class="card-block card-block-small">
      Target 0
    </div>
  </div>

</div>
`
