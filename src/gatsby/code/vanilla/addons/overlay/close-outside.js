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
<div class="list list-default list-space-small align-items-center justify-content-center">

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      default
    </button>
    <div class="overlay overlay-default overlay-close-outside">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">Lorem ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
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
      position left
    </button>
    <div class="overlay overlay-default overlay-position-left overlay-close-outside">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">Lorem ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
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
      position right
    </button>
    <div class="overlay overlay-default overlay-position-right overlay-close-outside">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">Lorem ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
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
