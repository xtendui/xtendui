import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
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
<div class="list list-2 items-center">

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      default
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.<br/>Proin molestie ${iconLink({
          classes: 'icon-md',
        })} diam nec euismod commodo.
      </div>
    </div>

  </div>

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      primary
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardPrimary()}">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.<br/>Proin molestie ${iconLink({
          classes: 'icon-md',
        })} diam nec euismod commodo.
      </div>
    </div>

  </div>

</div>
`
