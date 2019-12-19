import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div data-xt-overlay>
  <button type="button" class="btn btn-primary demo_overlay-disable-btn">
    Toggle
  </button>
  <div class="overlay demo_overlay-disable">
    <div class="overlay-container">
      <div class="overlay-inner">

          <div class="card card-overlay">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="btn btn-close" aria-label="Close"></div>
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">Lorem ipsum</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                    ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                    justo.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                    ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                    justo.</p>

                  <div data-xt-overlay>
                    <button type="button" class="btn btn-primary">
                      Toggle
                    </button>
                    <div class="overlay overlay-small">
                      <div class="overlay-container">
                        <div class="overlay-inner">

                          <div class="card card-overlay">
                            <div class="card-design"></div>
                            <div class="card-inner">
                              <div class="btn btn-close" aria-label="Close"></div>
                              <div class="card-content">
                                <div class="card-block card-item">
                                  <div class="card-title">Lorem ipsum</div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                                    ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                                    justo.</p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                                    ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                                    justo.</p>
                                  <div class="drop-container" data-xt-drop="{ backdrop: true }">
                                    <button type="button" class="btn btn-primary">
                                      drop backdrop
                                    </button>
                                    <div class="drop drop-default drop-bottom drop-left">
                                      <div class="drop-inner">
                                        <div class="drop-design"></div>
                                        <div class="drop-content">
                                          <ul class="list list-drop">
                                            <li>
                                              <button type="button" class="btn btn-default">
                                                Lorem ipsum dolor
                                              </button>
                                            </li>
                                            <li>
                                              <button type="button" class="btn btn-default">
                                                Dolor sit
                                              </button>
                                            </li>
                                            <li>
                                              <button type="button" class="btn btn-default">
                                                Amet
                                              </button>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  </div>
</div>
`
