import path from 'path'
const img = require('components/snippets/img').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items-center">

  <div data-xt-overlay>
    <button type="button" class="btn btn--primary">
      screen
    </button>
    <div class="overlay overlay-screen">
      <div class="overlay-container">
        <div class="overlay-inner">

            <div class="card card--overlay">
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
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn--primary">
      screen image
    </button>
    <div class="overlay overlay-screen overlay--full">
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card card--overlay">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="btn btn-close" aria-label="Close"></div>
              <div class="card-content">
                <div class="card-asset">
                  ${img({ classes: 'full', width: 1200, height: 1200 })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn--primary">
      screen multiple
    </button>
    <div class="overlay overlay-screen">
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card card--overlay">
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
                </div>
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
