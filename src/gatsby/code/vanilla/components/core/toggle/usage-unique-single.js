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
          data-xt-toggle="{ targets: '#toggle--unique-0' }">
    Toggle 0
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}"
          data-xt-toggle="{ targets: '#toggle--unique-1' }">
    Toggle 1
  </button>

  <div class="card card-block card-block-small text-sm toggle ${cardDefault()}" id="toggle--unique-0">
    Target 0
  </div>

  <div class="card card-block card-block-small text-sm toggle ${cardDefault()}" id="toggle--unique-1">
    Target 1
  </div>

</div>
`
