import path from 'path'
const markupDropCard = require('components/snippets/components/markup-drop-card').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center">

  <div class="drop-container demo--drop-container-reset-sm" data-xt-drop>
    <button type="button" class="btn btn-primary">
      Toggle
    </button>
    <div class="drop drop-default">
    ${indentString(markupDropCard(), 6)}
    </div>
  </div>

  <div class="drop-container demo--drop-container-reset-sm" data-xt-drop>
    <button type="button" class="btn btn-primary">
      Toggle
    </button>
    <div class="drop drop-default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <nav class="list-block list-drop">
            <button type="button">
              Lorem ipsum dolor
            </button>
            <button type="button">
              Dolor sit
            </button>
            <div class="drop-container" data-xt-drop>
              <button type="button">
                Toggle
              </button>
              <div class="drop drop-primary drop-center drop-middle">
                <div class="drop-inner">
                  <div class="drop-design"></div>
                  <div class="drop-content">

                    <nav class="list-block list-drop">
                      <button type="button">
                        Lorem ipsum dolor
                      </button>
                      <button type="button">
                        Dolor sit
                      </button>
                      <div class="drop-container" data-xt-drop>
                        <button type="button">
                          Toggle
                        </button>
                        <div class="drop drop-default drop-center drop-middle">
                          <div class="drop-inner">
                            <div class="drop-design"></div>
                            <div class="drop-content">

                              <nav class="list-block list-drop">
                                <button type="button">
                                  Lorem ipsum dolor
                                </button>
                                <button type="button">
                                  Dolor sit
                                </button>
                                <button type="button">
                                  Amet
                                </button>
                              </nav>

                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>

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
`
