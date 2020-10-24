import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultOverlay = require('components/snippets/classes/card-default-overlay').default
const iconX = require('components/snippets/icons').iconX
const img = require('components/snippets/img').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center w-full">

  <div data-xt-overlay>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      asset
    </button>

    <div class="overlay">
      <div class="overlay-container max-w-3xl">
        <div class="overlay-inner">

          <div class="card ${cardDefaultOverlay()}">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="rounded-md">
              ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div data-xt-overlay>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      asset and text
    </button>

    <div class="overlay">
      <div class="overlay-container max-w-3xl">
        <div class="overlay-inner">

          <div class="card ${cardDefaultOverlay()}">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="rounded-t-md">
              ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
            </div>
            <div class="card-md">
              <div class="h4">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div data-xt-overlay>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      text
    </button>

    <div class="overlay">
      <div class="overlay-container max-w-3xl">
        <div class="overlay-inner">

          <div class="card ${cardDefaultOverlay()}">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="card-md rounded-t-md bg-gray-500">
              <div class="h4">Lorem ipsum</div>
            </div>
            <div class="card-md">
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
            </div>
            <div class="card-sm pt-0">
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

</div>
`
