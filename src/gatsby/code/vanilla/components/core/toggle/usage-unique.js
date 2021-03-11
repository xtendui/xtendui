import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}" data-xt-toggle="{ targets: '#toggle--unique-0, #toggle--unique-1' }">
    Toggle
  </button>

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}" data-xt-toggle="{ targets: '#toggle--unique-0, #toggle--unique-1' }">
    Toggle same
  </button>

  <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" id="toggle--unique-0">
    Target 0
  </div>

  <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" id="toggle--unique-1">
    Target 1
  </div>

</div>
`
