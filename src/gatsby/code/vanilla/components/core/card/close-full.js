import path from 'path'
const cardDefaultFull = require('components/snippets/classes/card-default-full').default
const cardPrimaryFull = require('components/snippets/classes/card-primary-full').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-space-3">

  <div class="w-full md:w-6/12">
    <div class="card ${cardDefaultFull()}">
      <div class="btn btn-close p-0" aria-label="Close">
        ${iconX()}
      </div>
      <div class="btn btn-close p-0" aria-label="Close">
        ${iconX()}
      </div>
      <div class="card-block card-block-md p-0">
        <div class="h4">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

  <div class="w-full md:w-6/12">
    <div class="card ${cardPrimaryFull()}">
      <div class="btn btn-close p-0" aria-label="Close">
        ${iconX()}
      </div>
      <div class="card-block card-block-md p-0">
        <div class="h4">Primary</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

</div>
`
