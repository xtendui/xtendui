import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center justify-content-center">

  <button type="button" class="btn btn-default ripple">
    default
  </button>

  <button type="button" class="btn btn-primary ripple">
    primary
  </button>

  <button type="button" class="btn btn-text ripple">
    text
  </button>

  <div class="row row-default">

    <div class="col-12 col-6-sm">
      <button type="button" class="card card-default ripple">
        <div class="card-design"></div>
        <div class="card-inner">
          <div class="card-content">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum dolor sit amet</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
            </div>
          </div>
        </div>
      </button>
    </div>

    <div class="col-12 col-6-sm">
      <button type="button" class="card card-primary ripple">
        <div class="card-design"></div>
        <div class="card-inner">
          <div class="card-content">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum dolor sit amet</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
            </div>
          </div>
        </div>
      </button>
    </div>

    <div class="col-12 col-6-sm">
      <button type="button" class="card card-white ripple">
        <div class="card-design"></div>
        <div class="card-inner">
          <div class="card-content">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum dolor sit amet</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
            </div>
          </div>
        </div>
      </button>
    </div>

    <div class="col-12 col-6-sm">
      <div class="card card-default ripple">
        <div class="card-design"></div>
        <div class="card-inner">
          <div class="card-content">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum dolor sit amet</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
              <button type="button" class="btn btn-default ripple">
                default
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-6-sm">
      <div class="card card-primary ripple">
        <div class="card-design"></div>
        <div class="card-inner">
          <div class="card-content">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum dolor sit amet</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
              <button type="button" class="btn btn-primary ripple">
                primary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-6-sm">
      <div class="card card-white ripple">
        <div class="card-design"></div>
        <div class="card-inner">
          <div class="card-content">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum dolor sit amet</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
              <button type="button" class="btn btn-text ripple">
                text
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
