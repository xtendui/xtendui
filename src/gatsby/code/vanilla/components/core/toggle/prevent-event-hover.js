import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ min: 1, on: 'mouseenter', off: 'mouseleave', autoDisable: false, preventEvent: true }">

  <a href="#toggle--prevent-event-1-hover" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Toggle 1 hover
  </a>

  <a href="#toggle--prevent-event-2-hover" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Toggle 2 hover
  </a>

  <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
    Target 1 hover
  </div>

  <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
    Target 2 hover
  </div>

</div>
`
