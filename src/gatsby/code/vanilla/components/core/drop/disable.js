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
<div class="list list-space-2 items-center">

  <div class="drop-container demo--drop-container-disable" data-xt-drop>

    <button type="button" class="btn btn-medium ${btnPrimary()}">
      disable sm
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-small ${cardDefaultDropList()}">
          <div class="card-block py-3">
            <nav class="list-block">
              <a href="#" class="btn btn-small ${btnDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="btn btn-small ${btnDefaultDrop()}">
                Dolor sit
              </button>
              <div class="drop-container" data-xt-drop>

                <button type="button" class="btn btn-small ${btnDefaultDrop()}">
                  Drop inner
                </button>

                <div class="drop drop-center drop-middle">
                  <div class="drop-inner">
                    <div class="card card-small ${cardPrimaryDropList()}">
                      <div class="card-block py-3">
                        <nav class="list-block">
                          <a href="#" class="btn btn-small ${btnPrimaryDrop()}">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </a>
                          <button type="button" class="btn btn-small ${btnPrimaryDrop()}">
                            Dolor sit
                          </button>
                          <button type="button" class="btn btn-small ${btnPrimaryDrop()}">
                            Amet
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
