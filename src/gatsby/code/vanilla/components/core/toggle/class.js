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
<div class="xt-list xt-list-3 items-center" data-xt-toggle>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}" data-xt-group="my-group">
    Toggle Group 0
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 1
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}" data-xt-group="another-group">
    Toggle Group 2
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 3
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}" data-xt-group="another-group">
    Toggle Group 2
  </button>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 1
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}" data-xt-group="my-group">
    Target Group 0
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}" data-xt-group="another-group">
    Target Group 2
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}" data-xt-group="my-group">
    Target Group 0
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 3
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()} in-toggle" data-xt-group="another-group">
    Target Group 3
  </div>

</div>
`
