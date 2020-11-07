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
<div class="list list-2 items-center">

  <button type="button" class="btn btn-md rounded-md ${btnDefault()}" data-xt-toggle="{ targets: '#toggle--unique-2, #toggle--unique-3' }">
    Toggle same
  </button>

  <button type="button" class="btn btn-md rounded-md ${btnDefault()}" data-xt-toggle="{ targets: '#toggle--unique-2, #toggle--unique-3' }">
    Toggle same
  </button>

  <div class="card toggle rounded-md ${cardToggle()}" id="toggle--unique-2">
    Target 0
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" id="toggle--unique-3">
    Target 0
  </div>

</div>
`
