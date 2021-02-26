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
<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}" data-xt-toggle="{ targets: '#toggle--unique-0' }">
    Toggle 0
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}" data-xt-toggle="{ targets: '#toggle--unique-1' }">
    Toggle 1
  </button>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}" id="toggle--unique-0">
    Target 0
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}" id="toggle--unique-1">
    Target 1
  </div>

</div>
`
