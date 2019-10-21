import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center demo-source-from">
  <div data-xt-overlay>
    <button type="button" class="btn btn--primary">
      Toggle
    </button>
    <div class="overlay overlay--default overlay--big">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>
          <div class="overlay-close xt-fixed--check">
            <div class="btn btn-close overlay-dismiss" aria-label="Close"></div>
          </div>
          <div class="overlay-content">
            <div class="h2">Lorem ipsum</div>
            <div class="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>

            <div data-xt-overlay>
              <button type="button" class="btn btn--primary">
                Toggle
              </button>
              <div class="overlay overlay--default overlay--small">
                <div class="overlay-container">
                  <div class="overlay-inner">
                    <div class="overlay-design"></div>
                    <div class="overlay-close xt-fixed--check">
                      <div class="btn btn-close overlay-dismiss" aria-label="Close"></div>
                    </div>
                    <div class="overlay-content">
                      <div class="h2">Lorem ipsum</div>
                      <div class="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare
                        volutpat,
                        ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui
                        sem id
                        justo.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                        ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                        justo.</p>
                      <div class="drop-container" data-xt-drop="{ backdrop: true }">
                        <button type="button" class="btn btn--primary">
                          drop backdrop
                        </button>
                        <div class="drop drop--default drop--bottom drop--left">
                          <div class="drop-inner">
                            <div class="drop-design"></div>
                            <div class="drop-content">
                              <ul class="list list--drop">
                                <li>
                                  <button type="button" class="btn btn--default">
                                    Lorem ipsum dolor
                                  </button>
                                </li>
                                <li>
                                  <button type="button" class="btn btn--default">
                                    Dolor sit
                                  </button>
                                </li>
                                <li>
                                  <button type="button" class="btn btn--default">
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
`
