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
<div class="list list-2 items-center" data-xt-toggle>

  <button type="button" class="btn btn-md ${btnDefault()}">
    Toggle 0
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    Toggle 1
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    Toggle 2
  </button>

  <div class="card toggle ${cardToggle()}">
    Target 0
    <div class="card toggle ${cardToggle()}">
      Nested targets are not toggled
    </div>
  </div>

  <div class="card toggle ${cardToggle()}">
    Target 1
    <div class="card toggle ${cardToggle()}">
      Nested targets are not toggled
    </div>
  </div>

  <div class="card toggle ${cardToggle()}">
    Target 2
    <div class="card toggle ${cardToggle()}">
      Nested targets are not toggled
    </div>
  </div>

</div>
`
