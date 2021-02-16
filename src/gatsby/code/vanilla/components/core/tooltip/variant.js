import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardBlack = require('components/snippets/classes/card-black').default
const cardPrimary = require('components/snippets/classes/card-primary').default
const iconLink = require('components/snippets/icons').iconLink

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      Black
    </button>

    <div class="xt-tooltip">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.<br/>Proin molestie ${iconLink()} diam nec euismod commodo.
      </div>
    </div>

  </div>

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      Primary
    </button>

    <div class="xt-tooltip">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardPrimary()}">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.<br/>Proin molestie ${iconLink()} diam nec euismod commodo.
      </div>
    </div>

  </div>

</div>
`
