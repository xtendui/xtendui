import path from 'path'
const cardDefault = require('components/snippets/classes/card-default').default
const cardPrimary = require('components/snippets/classes/card-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-space-3">

  <div class="w-full sm:w-6/12">
    <div class="card ${cardDefault()}">
      <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
      <div class="card-block">
        <div class="h4 card-title">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

  <div class="w-full sm:w-6/12">
    <div class="card ${cardPrimary()}">
      <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
      <div class="card-block">
        <div class="h4 card-title">Primary</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

</div>
`
