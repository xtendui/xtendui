import path from 'path'
const img = require('components/snippets/img').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultDrop = require('components/snippets/classes/card-default-drop').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="relative" style="padding: 1rem 1.5rem; background: #0078ff;">

  <div class="drop-container drop-container-static" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      static
    </button>

    <div class="drop p-0">
      <div class="drop-inner">
        <div class="card card-md ${cardDefaultDrop()}">
          <div class="sm:card-group">
            <div class="card-block card-block-md sm:w-7/12 bg-gray-400 sm:rounded-tl-md">
              <div class="h4">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
            <div class="sm:w-5/12">
              <div class="card-block card-block-md bg-gray-500 sm:rounded-tr-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
              </div>
              <div class="card-block card-block-md">
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

  </div>

</div>
`
