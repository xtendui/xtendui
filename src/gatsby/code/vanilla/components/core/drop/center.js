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
<div class="list list-space-2 items-center">

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      bottom center
    </button>

    <div class="drop md:drop-bottom md:drop-center">
      <div class="drop-inner">
        <div class="card card-sm ${cardDefaultDropList()}">
          <div class="card-block py-3">
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

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      top center
    </button>

    <div class="drop md:drop-top md:drop-center">
      <div class="drop-inner">
        <div class="card card-sm ${cardDefaultDropList()}">
          <div class="card-block py-3">
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

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      center middle
    </button>

    <div class="drop md:drop-center md:drop-middle">
      <div class="drop-inner">
        <div class="card card-sm ${cardDefaultDropList()}">
          <div class="card-block py-3">
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

  </div>

</div>
`
