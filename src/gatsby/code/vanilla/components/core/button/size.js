import path from 'path'

const buttonSm = require('components/snippets/classes').buttonSm
const buttonMd = require('components/snippets/classes').buttonMd
const buttonLg = require('components/snippets/classes').buttonLg
const buttonPrimary = require('components/snippets/classes').buttonPrimary

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}">
    small
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    medium
  </button>

  <button type="button" class="xt-button ${buttonLg()} rounded-md ${buttonPrimary()}">
    large
  </button>

</div>
`
