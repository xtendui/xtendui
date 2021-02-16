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
<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ min: 1, preventEvent: true }">

  <a href="#toggle--prevent-event-0" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 0
  </a>

  <a href="#toggle--prevent-event-1" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 1
  </a>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 0
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 1
  </div>

</div>

<br/>

<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ min: 1, on: 'mouseenter', off: 'mouseleave', preventEvent: true }">

  <a href="#toggle--prevent-event-1-hover" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 1 hover
  </a>

  <a href="#toggle--prevent-event-2-hover" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 2 hover
  </a>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 1 hover
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 2 hover
  </div>

</div>
`
