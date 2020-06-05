import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="drop-container drop-disable" data-xt-drop>
  <button type="button" class="btn btn-primary">
    Toggle
  </button>
  <div class="drop drop-default">
    <div class="drop-inner">
      <div class="drop-design"></div>
      <div class="drop-content">

        <ul class="list list-drop">
          <li>
            <button type="button">
              Lorem ipsum dolor
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>

      </div>
    </div>
  </div>
</div>

<div class="drop-container demo--drop-disable-sm" data-xt-drop>
  <button type="button" class="btn btn-primary">
    Toggle
  </button>
  <div class="drop drop-default">
    <div class="drop-inner">
      <div class="drop-design"></div>
      <div class="drop-content">

        <ul class="list list-drop">
          <li>
            <button type="button">
              Lorem ipsum dolor
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li class="drop-container" data-xt-drop>
            <button type="button">
              Toggle
            </button>
            <div class="drop drop-primary drop-after drop-middle">
              <div class="drop-inner">
                <div class="drop-design"></div>
                <div class="drop-content">

                  <ul class="list list-drop">
                    <li>
                      <button type="button">
                        Lorem ipsum dolor
                      </button>
                    </li>
                    <li>
                      <button type="button">
                        Dolor sit
                      </button>
                    </li>
                    <li class="drop-container" data-xt-drop>
                      <button type="button">
                        Toggle
                      </button>
                      <div class="drop drop-default drop-center drop-middle">
                        <div class="drop-inner">
                          <div class="drop-design"></div>
                          <div class="drop-content">

                            <ul class="list list-drop">
                              <li>
                                <button type="button">
                                  Lorem ipsum dolor
                                </button>
                              </li>
                              <li>
                                <button type="button">
                                  Dolor sit
                                </button>
                              </li>
                              <li>
                                <button type="button">
                                  Amet
                                </button>
                              </li>
                            </ul>

                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </div>
</div>
`
