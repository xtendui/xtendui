import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const tooltipSm = require('components/snippets/classes').tooltipSm
const tooltipMd = require('components/snippets/classes').tooltipMd
const tooltipLg = require('components/snippets/classes').tooltipLg
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardBlack = require('components/snippets/classes').cardBlack

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
      small
    </button>

    <div class="xt-tooltip p-2">
      <div class="${tooltipSm()} rounded-md shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div data-xt-tooltip>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      medium
    </button>

    <div class="xt-tooltip p-2">
      <div class="${tooltipMd()} rounded-md shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div data-xt-tooltip>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      large
    </button>

    <div class="xt-tooltip p-2">
      <div class="${tooltipLg()} rounded-md shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div data-xt-tooltip>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      max-width
    </button>

    <div class="xt-tooltip p-2">
      <div class="${tooltipMd()} max-w-lg rounded-md shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue.
      </div>
    </div>

  </div>

</div>
`
