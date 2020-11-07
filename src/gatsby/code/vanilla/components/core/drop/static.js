import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultDrop = require('components/snippets/classes/card-default-drop').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="relative py-4 px-6 bg-accent-500">

  <div class="drop-container drop-container-static" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      static
    </button>

    <div class="drop p-0">
      <div class="drop-inner">
        <div class="card w-full ${cardDefaultDrop()}">
          <div class="md:card-group">
            <div class="card-md md:w-7/12 bg-gray-400">
              <div class="h4">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
            <div class="md:w-5/12">
              <div class="card-md bg-gray-500">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
              </div>
              <div class="card-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
              </div>
            </div>
          </div>
          <div class="media-container rounded-b-md ratio-15">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
