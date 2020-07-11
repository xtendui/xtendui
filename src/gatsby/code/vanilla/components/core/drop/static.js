import path from 'path'
const img = require('components/snippets/img').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div style="position: relative; padding: 1rem 1.5rem; background: #0078ff;">

  <div class="drop-container drop-container-static" data-xt-drop>
    <button type="button" class="btn btn-primary">
      Toggle
    </button>
    <div class="drop drop-default drop-squared drop-nospace drop-noborder">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <div class="card card-drop">
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

                  <div class="card-block card-item">
                    <div class="card-title">Lorem ipsum</div>
                    <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
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
