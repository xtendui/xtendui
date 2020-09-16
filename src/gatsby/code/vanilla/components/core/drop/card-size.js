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
<div class="list list-space-2 items-center">

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-medium ${btnPrimary()}">
      small
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-small ${cardDefaultDrop()}">
          <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
          <div class="card-block card-block-small text-sm">
            <div class="h5">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-medium ${btnPrimary()}">
      medium
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-medium ${cardDefaultDrop()}">
          <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
          <div class="card-block card-block-medium">
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-medium ${btnPrimary()}">
      large
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card card-large ${cardDefaultDrop()}">
          <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
          <div class="card-block card-block-large text-lg">
            <div class="h3">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
