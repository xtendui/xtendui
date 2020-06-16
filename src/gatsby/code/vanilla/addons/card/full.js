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
<div class="row row-default">

  <div class="col-12 col-6-sm">
    <a role="button" class="card card-default card-collapse card-full">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-block-intro">
            <div class="card-title">Lorem ipsum</div>
          </div>
          <div class="card-block card-item">
            <div class="card-title">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
          <div class="card-item-nested card-item card-group">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
          </div>
          <div class="card-asset">
            ${img({ classes: 'media-cover', ratio: '37.5%' })}
          </div>
        </div>
      </div>
    </a>
  </div>

  <div class="col-12 col-6-sm">
    <a role="button" class="card card-primary card-collapse card-full">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-block-intro">
            <div class="card-title">Lorem ipsum</div>
          </div>
          <div class="card-block card-item">
            <div class="card-title">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
          <div class="card-item-nested card-item card-group">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
          </div>
          <div class="card-asset">
            ${img({ classes: 'media-cover', ratio: '37.5%' })}
          </div>
        </div>
      </div>
    </a>
  </div>

  <div class="col-12">
    <a role="button" class="card card-primary card-horizontal-sm card-collapse card-full">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-asset">
            ${img({ classes: 'media-cover', ratio: '37.5%' })}
          </div>
          <div class="card-block card-item">
            <div class="card-title">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
          <div class="card-block card-item">
            <div class="card-title">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </a>
  </div>

</div>
`
