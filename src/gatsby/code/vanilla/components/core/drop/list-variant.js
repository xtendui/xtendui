import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const btnPrimaryDrop = require('components/snippets/classes/btn-primary-drop').default
const cardDefaultDropList = require('components/snippets/classes/card-default-drop-list').default
const cardPrimaryDropList = require('components/snippets/classes/card-primary-drop-list').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-drop>

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      default
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="w-64 py-3 rounded-md shadow-drop ${cardDefaultDropList()}">
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

  <div data-xt-drop>

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      primary
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="w-64 py-3 rounded-md shadow-drop ${cardPrimaryDropList()}">
          <nav class="list flex-col">
            <a href="#" class="btn btn-sm ${btnPrimaryDrop()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button type="button" class="btn btn-sm ${btnPrimaryDrop()}">
              Dolor sit
            </button>
            <button type="button" class="btn btn-sm ${btnPrimaryDrop()}">
              Amet
            </button>
          </nav>
        </div>
      </div>
    </div>

  </div>

</div>
`
