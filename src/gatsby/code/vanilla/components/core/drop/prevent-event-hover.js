import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const cardWhite = require('components/snippets/classes/card-white').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div class="inline-block" data-xt-drop="{ elements: false, elementsInner: ':scope > a, :scope > button', on: 'mouseenter', off: 'mouseleave', preventEvent: true }">

    <a href="#drop-with-link-1" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      drop
    </a>

    <div class="drop">
      <div class="card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
        <nav class="list flex-col">
          <a href="#" class="btn text-xxs py-1.5 px-2.5 ${btnDefaultDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="btn text-xxs py-1.5 px-2.5 ${btnDefaultDrop()}">
            Dolor sit
          </button>
          <button type="button" class="btn text-xxs py-1.5 px-2.5 ${btnDefaultDrop()}">
            Amet
          </button>
        </nav>
      </div>
    </div>

  </div>

</div>
`
