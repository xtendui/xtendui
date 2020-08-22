import path from 'path'
const img = require('components/snippets/img').default
const cardDefault = require('components/snippets/classes/card-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-space-3">

  <div class="w-full">
    <div class="card ${cardDefault()}">
      <div class="sm:card-group">
        <div class="card-block card-block-medium">
          <div class="h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
        <div>
          <div class="card-block card-block-medium bg-gray-500 sm:rounded-tr-md">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
          </div>
          <div class="card-block card-block-medium">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
          </div>
        </div>
      </div>
      <div class="card-asset rounded-b-md">
        ${img({ classes: 'object-cover object-center', ratio: '15%' })}
      </div>
    </div>
  </div>

</div>
`
