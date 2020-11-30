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
<div class="list list-2 items-center xt-disable" data-xt-toggle>

  <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
    Toggle 0
  </button>

  <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
    Toggle 1
  </button>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 0
  </div>

  <div class="card toggle rounded-md ${cardToggle()} in-toggle">
    Target 1
  </div>

</div>

<br/>

<div class="list list-2 items-center xt-disable-after-init" data-xt-toggle>

  <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
    Toggle 0
  </button>

  <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
    Toggle 1
  </button>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 0
  </div>

  <div class="card toggle rounded-md ${cardToggle()} in-toggle">
    Target 1
  </div>

</div>
`