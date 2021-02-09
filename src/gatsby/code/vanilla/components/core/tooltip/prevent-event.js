import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div class="inline-block" data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button', on: 'mouseenter', off: 'mouseleave', preventEvent: true }">

    <a href="#tooltip-with-link-1" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      tooltip
    </a>

    <div class="tooltip">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</div>
`
