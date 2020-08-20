import path from 'path'
const img = require('components/snippets/img').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<a role="button" class="card card-default card-horizontal-sm card-collapse card-full">
  <div class="card-design"></div>
  <div class="card-inner">
    <div class="card-content">
      <div class="card-asset">
        ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
      </div>
      <div class="card-block card-item">
        <div class="card-title">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
      <div class="card-block card-item">
        <div class="card-title">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</a>
`
