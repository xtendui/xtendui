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
<div class="list list-default list-space-small align-items-center">

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      group side
    </button>
    <div class="overlay">
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card card-overlay">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-item-nested card-item card-group-sm">
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
                  <div class="card-block card-item card-block-side">
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

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      group side image
    </button>
    <div class="overlay">
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card card-overlay">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-item-nested card-item card-group-sm">
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
                  <div class="card-item card-block-side">
                    <div class="card-asset">
                      ${img({ classes: 'media-cover', ratio: '37.5%' })}
                    </div>
                    <div class="card-block card-item">
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
  </div>

</div>
`
