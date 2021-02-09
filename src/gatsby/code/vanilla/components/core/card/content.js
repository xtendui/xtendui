import path from 'path'
const cardDefault = require('components/snippets/classes/card-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-6">

  <div class="w-full md:w-6/12">
    <div class="card rounded-md ${cardDefault()}">
      <div class="media-container bg-gray-700 rounded-md ratio-37.5">
        <div class="media-inner">
          <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
        </div>
      </div>
    </div>
  </div>

  <div class="w-full md:w-6/12">
    <div class="card rounded-md ${cardDefault()}">
      <div class="media-container bg-gray-700 rounded-t-md ratio-37.5">
        <div class="media-inner">
          <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
        </div>
      </div>
      <div class="text-base p-8">
        <div class="h4">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

  <div class="w-full">
    <div class="card rounded-md ${cardDefault()}">
      <div class="text-base p-8 rounded-t-md bg-gray-500">
        <div class="h4">Lorem ipsum</div>
      </div>
      <div class="text-base p-8">
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
      <div class="text-sm p-6 pt-0">
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

</div>
`
