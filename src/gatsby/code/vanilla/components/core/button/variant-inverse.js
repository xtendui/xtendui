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
<div class="bg-primary-500 py-5 px-6">
  <div class="xt-list xt-list-3 items-center text-white xt-links-inverse">

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
      Gray
    </button>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      Primary
    </button>

    <button type="button" class="xt-button ${buttonMd()} rounded-md text-white ${buttonText()}">
      Text
    </button>

    <button type="button" class="xt-button ${buttonMd()} rounded-md xt-link">
      Link
    </button>

  </div>
</div>
`
