import path from 'path'

const cardDefaultFull = require('components/snippets/classes').cardDefaultFull

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-row xt-row-6">

  <div class="w-full">
    <div class="xt-card rounded-md ${cardDefaultFull()}">
      <div class="text-sm">
        <div class="xt-h5">Small</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

  <div class="w-full">
    <div class="xt-card rounded-md ${cardDefaultFull()}">
      <div class="text-base">
        <div class="xt-h4">Medium</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

  <div class="w-full">
    <div class="xt-card rounded-md ${cardDefaultFull()}">
      <div class="text-lg">
        <div class="xt-h3">Large</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

</div>
`
