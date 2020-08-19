import path from 'path'
const img = require('components/snippets/img').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-space-4 row-stretch">

  <div class="col-12 col-6-sm">
    <div class="card card-default">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content"
          style="justify-content: space-between;">
          <div class="card-asset">
            ${img({ classes: 'media-cover', ratio: '37.5%' })}
          </div>
          <div class="card-block card-item">
            <div class="card-title">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
          <div class="card-block card-item card-block-side">
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-6-sm">
    <div class="card card-default">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content"
          style="justify-content: space-between;">
          <div class="card-asset">
            ${img({ classes: 'media-cover', ratio: '37.5%' })}
          </div>
          <div class="card-block card-item">
            <div class="card-title">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
          </div>
          <div class="card-block card-item card-block-side">
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
`
