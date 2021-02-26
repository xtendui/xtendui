import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardToggle = require('components/snippets/classes').cardToggle

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ matches: { '(max-width: 767px)': { disabled: true }, '(min-width: 768px)': { max: 2 } } }">

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 0
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 1
  </button>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 0
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()} in-toggle">

    Target 1

    <div class="xt-list xt-list-3 items-center mt-4" data-xt-toggle="{ min: 1 }">

      <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
        Toggle Nested 0
      </button>

      <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
        Toggle Nested 1
      </button>

      <div class="xt-toggle">
        Target Nested 0
      </div>

      <div class="xt-toggle">
        Target Nested 1
      </div>

    </div>

  </div>

</div>
`
