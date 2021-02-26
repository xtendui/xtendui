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
<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ class: 'in in-toggle demo--toggle-custom-class' }">

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle
  </button>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target
  </div>

</div>
`
