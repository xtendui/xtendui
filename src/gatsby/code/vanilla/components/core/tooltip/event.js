import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const tooltipMd = require('components/snippets/classes').tooltipMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardBlack = require('components/snippets/classes').cardBlack
const inputDefault = require('components/snippets/classes').inputDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-tooltip="{ on: 'click', off: 'click' }">

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    click
  </button>

  <div class="xt-tooltip p-2">
    <div class="${tooltipMd()} rounded shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet

      <div class="inline-block" data-xt-tooltip="{ position: 'auto' }">

        <a href="#">nested</a>

        <div class="xt-tooltip p-2">
          <div class="${tooltipMd()} rounded shadow-tooltip ${cardBlack()}">
              Consectetur adipiscing elit
          </div>
        </div>

      </div>

    </div>
  </div>

</div>

<form class="text-sm mt-4">

  <div data-xt-tooltip="{ elements: ':scope > input', on: 'focus', off: 'blur' }">

    <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Focus" placeholder="Focus">

    <div class="xt-tooltip p-2">
      <div class="${tooltipMd()} rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</form>
`
