import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const cardDefaultDropList = require('components/snippets/classes/card-default-drop-list').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<button type="button" class="btn btn-md ${btnPrimary()}" data-xt-drop="{ targets: '#drop--unique' }">
  drop
</button>

<div class="drop-container mt-2">

  Drop is relative to .drop-container

  <div class="drop" id="drop--unique">
    <div class="drop-inner">
      <div class="w-64 py-3 ${cardDefaultDropList()}">
        <nav class="list flex-col">
          <a href="#" class="btn btn-sm ${btnDefaultDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
            Dolor sit
          </button>
          <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
            Amet
          </button>
        </nav>
      </div>
    </div>
  </div>

</div>
`
