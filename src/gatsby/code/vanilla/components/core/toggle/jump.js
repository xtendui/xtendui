import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ targets: '.xt-card', jump: true }">

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Toggle 0
  </button>

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Toggle 1
  </button>

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Toggle 2
  </button>

  <div class="xt-card rounded-md ${classes.cardToggle()} transition opacity-50 active:opacity-100">
    Target 0
  </div>

  <div class="xt-card rounded-md ${classes.cardToggle()} transition opacity-50 active:opacity-100">
    Target 1
  </div>

  <div class="xt-card rounded-md ${classes.cardToggle()} transition opacity-50 active:opacity-100">
    Target 2
  </div>

</div>
`
