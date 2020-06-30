import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-default">

  <div class="col-12 col-6-sm">
    <div class="card card-default demo--card-disable">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-item">
            <div class="card-title">Default</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-6-sm">
    <div class="card card-primary demo--card-disable">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-item">
            <div class="card-title">Primary</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
`
