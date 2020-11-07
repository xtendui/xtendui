import path from 'path'
const cardDefault = require('components/snippets/classes/card-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-3 row-stretch">

  <div class="w-full md:w-6/12">
    <div class="card ${cardDefault()}">
      <div class="media-container rounded-t-md ratio-37.5">
        <div class="media-inner">
          <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
        </div>
      </div>
      <div class="card-md">
        <div class="h4">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
      <div class="card-md mt-auto rounded-b-md bg-gray-400">
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

  <div class="w-full md:w-6/12">
    <div class="card ${cardDefault()}">
      <div class="media-container rounded-t-md ratio-37.5">
        <div class="media-inner">
          <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
        </div>
      </div>
      <div class="card-md">
        <div class="h4">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
      </div>
      <div class="card-md mt-auto rounded-b-md bg-gray-400">
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
      </div>
    </div>
  </div>

</div>
`
