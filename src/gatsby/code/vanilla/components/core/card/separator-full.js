import path from 'path'
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
    <div class="card rounded-md ${cardDefaultFull()}">
      <div class="md:card-group">
        <div class="card-md px-0 pt-0 sm:pb-0 sm:pr-6 md:w-7/12">
          <div class="h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
        <div class="border-t md:w-5/12 md:border-t-0 md:border-l border-solid border-gray-500">
          <div class="card-sm px-0 sm:pt-0 sm:pl-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
          </div>
          <div class="card-md px-0 pb-0 md:pt-6 sm:pl-6 border-t border-solid border-gray-500">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
`
