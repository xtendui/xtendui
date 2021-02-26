import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const buttonText = require('components/snippets/classes').buttonText

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()} active">
    Gray
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()} active">
    Primary
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md text-black ${buttonText()} active">
    Text
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md xt-link active">
    Link
  </button>

</div>
`
