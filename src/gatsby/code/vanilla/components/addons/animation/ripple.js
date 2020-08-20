import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center justify-center demo--ripple-default">

  <button type="button" class="btn btn-default">
    default
  </button>

  <button type="button" class="btn btn-primary">
    primary
  </button>

  <button type="button" class="btn">
    text
  </button>

  <div class="row row-space-3">

    <div class="w-full sm:w-6/12">
      <a role="button" class="card card-default">
        <div class="card-design"></div>
        <div class="card-inner">
          <div class="card-content">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum dolor sit amet</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div class="w-full sm:w-6/12">
      <a role="button" class="card card-primary">
        <div class="card-design"></div>
        <div class="card-inner">
          <div class="card-content">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum dolor sit amet</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div class="w-full sm:w-6/12">
      <div class="card card-default">
        <div class="card-design"></div>
        <div class="card-inner">
          <div class="card-content">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum dolor sit amet</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
              <button type="button" class="btn btn-primary">
                primary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full sm:w-6/12">
      <div class="card card-primary">
        <div class="card-design"></div>
        <div class="card-inner">
          <div class="card-content">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum dolor sit amet</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
              <button type="button" class="btn btn-default">
                default
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
