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
<button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}" data-xt-drop="{ targets: '#drop--unique-1, #drop--unique-2' }">
  drop
</button>

<div class="drop" id="drop--unique-1">
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

<div class="drop" id="drop--unique-2" data-xt-position="right-end">
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
`
