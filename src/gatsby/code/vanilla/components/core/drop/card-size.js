import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultDrop = require('components/snippets/classes/card-default-drop').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      small
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card w-screen max-w-sm ${cardDefaultDrop()}">
          <div class="btn btn-close p-5 text-lg" aria-label="Close">
            ${iconX()}
          </div>
          <div class="py-4 px-5 text-sm">
            <div class="h5">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      medium
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card w-screen max-w-md ${cardDefaultDrop()}">
          <div class="btn btn-close p-5 text-xl" aria-label="Close">
            ${iconX()}
          </div>
          <div class="py-8 px-9">
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      large
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card w-screen max-w-lg ${cardDefaultDrop()}">
          <div class="btn btn-close p-5 text-2xl" aria-label="Close">
            ${iconX()}
          </div>
          <div class="py-10 px-11 text-lg">
            <div class="h3">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
