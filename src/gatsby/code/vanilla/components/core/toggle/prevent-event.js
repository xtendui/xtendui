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
<div class="list list-2 items-center" data-xt-toggle="{ min: 1, preventEvent: true }">

  <a href="#toggle--prevent-event-0" class="btn btn-md rounded-md ${btnDefault()}">
    Toggle 0
  </a>

  <a href="#toggle--prevent-event-1" class="btn btn-md rounded-md ${btnDefault()}">
    Toggle 1
  </a>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 0
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 1
  </div>

</div>

<br/>

<div class="list list-2 items-center" data-xt-toggle="{ min: 1, on: 'mouseenter', off: 'mouseleave', preventEvent: true }">

  <a href="#toggle--prevent-event-1-hover" class="btn btn-md rounded-md ${btnDefault()}">
    Toggle 1 hover
  </a>

  <a href="#toggle--prevent-event-2-hover" class="btn btn-md rounded-md ${btnDefault()}">
    Toggle 2 hover
  </a>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 1 hover
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 2 hover
  </div>

</div>
`
