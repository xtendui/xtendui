import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div class="inline-block" data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button', on: 'mouseenter', off: 'mouseleave', preventEvent: true }">

    <a href="#tooltip-with-link-1" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      tooltip
    </a>

    <div class="xt-tooltip">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</div>
`
