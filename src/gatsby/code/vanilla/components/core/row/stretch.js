import path from 'path'
const cardDefault = require('components/snippets/classes/card-default').default
const img = require('components/snippets/img').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-space-3 row-stretch">

  <div class="w-full sm:w-6/12">
    <div class="card ${cardDefault()}">
      <div class="card-asset rounded-t-md">
        ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
      </div>
      <div class="card-block card-block-medium">
        <div class="h4">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
      <div class="card-block card-block-medium mt-auto rounded-b-md sm:rounded-b-none sm:rounded-r-md bg-gray-400">
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

  <div class="w-full sm:w-6/12">
    <div class="card ${cardDefault()}">
      <div class="card-asset rounded-t-md">
        ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
      </div>
      <div class="card-block card-block-medium">
        <div class="h4">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
      </div>
      <div class="card-block card-block-medium mt-auto rounded-b-md sm:rounded-b-none sm:rounded-r-md bg-gray-400">
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
      </div>
    </div>
  </div>

</div>
`
