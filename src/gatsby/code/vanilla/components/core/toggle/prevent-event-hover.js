import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const cardToggle = require('components/snippets/classes').cardToggle

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ min: 1, on: 'mouseenter', off: 'mouseleave', autoDisable: false, preventEvent: true }">

  <a href="#toggle--prevent-event-1-hover" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 1 hover
  </a>

  <a href="#toggle--prevent-event-2-hover" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
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
