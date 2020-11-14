import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardWhite = require('components/snippets/classes/card-white').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-drop>

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      separator
    </button>

    <div class="drop">
      <div class="card w-screen max-w-2xl rounded-md shadow-drop ${cardWhite()}">
        <div class="md:card-group">
          <div class="card-md md:w-7/12">
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
          <div class="border-t md:w-5/12 md:border-t-0 md:border-l border-solid border-gray-500">
            <div class="card-sm">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
            </div>
            <div class="card-md border-t border-solid border-gray-500">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
