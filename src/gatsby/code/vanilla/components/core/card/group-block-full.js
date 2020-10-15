import path from 'path'
const img = require('components/snippets/img').default
const cardDefaultFull = require('components/snippets/classes/card-default-full').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-3">

  <div class="w-full">
    <div class="card ${cardDefaultFull()}">
      <div class="sm:card-group">
        <div class="card-block py-8 sm:w-7/12 px-0 pt-0 sm:pb-0 sm:pr-6">
          <div class="h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
        <div class="sm:w-5/12">
          <div class="card-block py-8 px-9 rounded-md bg-gray-500">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
          </div>
          <div class="card-block py-8 px-0 py-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
          </div>
        </div>
      </div>
      <div class="card-asset rounded-md">
        ${img({ classes: 'object-cover object-center', ratio: '15%' })}
      </div>
    </div>
  </div>

</div>
`
