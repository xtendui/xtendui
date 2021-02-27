import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const tooltipMd = require('components/snippets/classes').tooltipMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardBlack = require('components/snippets/classes').cardBlack
const cardPrimary = require('components/snippets/classes').cardPrimary
const iconLink = require('components/snippets/icons').iconLink

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-tooltip>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      Black
    </button>

    <div class="xt-tooltip p-2">
      <div class="${tooltipMd()} rounded-md shadow-tooltip ${cardBlack()}">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.<br/>Proin molestie ${iconLink()} diam nec euismod commodo.
      </div>
    </div>

  </div>

  <div data-xt-tooltip>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      Primary
    </button>

    <div class="xt-tooltip p-2">
      <div class="${tooltipMd()} rounded-md shadow-tooltip ${cardPrimary()}">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.<br/>Proin molestie ${iconLink()} diam nec euismod commodo.
      </div>
    </div>

  </div>

</div>
`
