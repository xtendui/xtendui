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
<div class="row row-3">

  <div class="w-full">
    <div class="card ${cardDefault()}">
      <div class="md:card-group">
        <div class="py-8 px-9 md:w-7/12">
          <div class="h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
        <div class="py-8 px-9 md:w-5/12 rounded-b-md md:rounded-b-none md:rounded-r-md bg-gray-400">
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full">
    <div class="card ${cardDefault()}">
      <div class="md:card-group">
        <div class="py-8 px-9 md:w-7/12 bg-gray-400 md:rounded-tl-md">
          <div class="h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
        <div class="md:w-5/12">
          <div class="py-8 px-9 bg-gray-500 md:rounded-tr-md">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
          </div>
          <div class="py-8 px-9">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
          </div>
        </div>
      </div>
      <div class="rounded-b-md">
        ${img({ classes: 'object-cover object-center', ratio: '15%' })}
      </div>
    </div>
  </div>

</div>
`
