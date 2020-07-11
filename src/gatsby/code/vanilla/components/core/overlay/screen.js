import path from 'path'
const img = require('components/snippets/img').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center">

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      screen
    </button>
    <div class="overlay overlay-default overlay-screen">
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
                    <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
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
      screen full image
    </button>
    <div class="overlay overlay-default overlay-screen overlay-size-full">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({ classes: 'media-cover', ratio: '100%' })}
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
      screen full nested
    </button>
    <div class="overlay overlay-default overlay-screen overlay-size-full">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">

                <div class="card-item-nested card-item card-group-sm">

                  <div class="card-item card-block-side col-5-sm">
                    <div class="card-asset">
                      ${img({ classes: 'media-cover', ratio: '100%', loading: 'eager' })}
                    </div>
                    <div class="card-block card-item">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                    </div>
                  </div>

                  <div class="card-block card-item"
                    style="justify-content: center">
                    <div class="card-title">Lorem ipsum</div>
                    <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
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
