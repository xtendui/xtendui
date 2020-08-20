import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center">

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      default
    </button>
    <div class="drop drop-default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <div class="card card-drop">
          <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="h4 card-title">Lorem Ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
                <div class="card-block card-item card-block-small">
                  <div class="h4 card-title">Small</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      small
    </button>
    <div class="drop drop-default drop-small">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <div class="card card-drop">
          <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="h4 card-title">Lorem Ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
                <div class="card-block card-item card-block-large">
                  <div class="h4 card-title">Large</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      medium
    </button>
    <div class="drop drop-default drop-medium">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <div class="card card-drop">
          <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="h4 card-title">Lorem Ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
                <div class="card-block card-item card-block-small">
                  <div class="h4 card-title">Small</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      large
    </button>
    <div class="drop drop-default drop-large">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <div class="card card-drop">
          <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="h4 card-title">Lorem Ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
                <div class="card-block card-item card-block-medium">
                  <div class="h4 card-title">Medium</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
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
