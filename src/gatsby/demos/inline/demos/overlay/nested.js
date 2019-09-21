import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-space--small align-items--center demo-source-from">
  <div data-xt-overlay>
    <button type="button" class="btn btn--primary">
      Toggle
    </button>
    <div class="overlay_outer overlay--big">
      <div class="overlay">
        <div class="overlay_inner">
          <div class="overlay_design"></div>
          <button type="button" class="btn btn--close overlay_dismiss" aria-label="Close"></button>

          <div class="overlay_content">
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
              <div class="overlay_outer overlay--small">
                <div class="overlay">
                  <div class="overlay_inner">

                    <div class="overlay_design"></div>
                    <button type="button" class="btn btn--close overlay_dismiss" aria-label="Close"></button>

                    <div class="overlay_content">
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
                      <div class="drop_outer" data-xt-drop='{"backdrop": true}'>
                        <button type="button" class="btn btn--primary">
                          drop backdrop
                        </button>
                        <div class="drop drop--bottom drop--left">
                          <div class="drop_inner">
                            <div class="drop_design"></div>
                            <div class="drop_content">
                              <ul class="list list--drop">
                                <li>
                                  <button type="button" class="btn">
                                    Lorem ipsum dolor
                                  </button>
                                </li>
                                <li>
                                  <button type="button" class="btn">
                                    Dolor sit
                                  </button>
                                </li>
                                <li>
                                  <button type="button" class="btn">
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
