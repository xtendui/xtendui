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

  <button type="button" class="btn btn-md ${btnDefault()}" data-xt-toggle="{ targets: '#toggle--unique-0' }">
    Toggle 0
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}" data-xt-toggle="{ targets: '#toggle--unique-1' }">
    Toggle 1
  </button>

  <div class="card toggle ${cardToggle()}" id="toggle--unique-0">
    Target 0
  </div>

  <div class="card toggle ${cardToggle()}" id="toggle--unique-1">
    Target 1
  </div>

</div>
`
