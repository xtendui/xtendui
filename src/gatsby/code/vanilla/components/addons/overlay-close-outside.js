import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnCloseOutside = require('components/snippets/classes/btn-close-outside').default
const cardDefaultOverlay = require('components/snippets/classes/card-default-overlay').default
const cardDefaultOverlayScreen = require('components/snippets/classes/card-default-overlay-screen').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center justify-center">

  <div data-xt-overlay>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      default
    </button>

    <div class="overlay overlay-close-outside">
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card ${cardDefaultOverlay()}">
            <div class="btn btn-close p-5 ${btnCloseOutside()} md:p-2 md:right-auto md:left-100" aria-label="Close">
              ${iconX()}
            </div>
            <div class="card-block py-10 px-11 text-lg">
              <div class="h2">Lorem ipsum</div>
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
      left
    </button>

    <div class="overlay overlay-screen">
      <div class="overlay-container max-w-md ml-0 mr-auto">
        <div class="overlay-inner">

          <div class="card ${cardDefaultOverlayScreen()}">
            <div class="btn btn-close p-5 ${btnCloseOutside()} md:p-2 md:right-auto md:left-100" aria-label="Close">
              ${iconX()}
            </div>
            <div class="card-block py-10 px-11">
              <div class="h3">Lorem ipsum</div>
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
      right
    </button>

    <div class="overlay overlay-screen">
      <div class="overlay-container max-w-md ml-auto mr-0">
        <div class="overlay-inner">

          <div class="card ${cardDefaultOverlayScreen()}">
            <div class="btn btn-close p-5 ${btnCloseOutside()} md:p-2 md:left-auto md:right-100" aria-label="Close">
              ${iconX()}
            </div>
            <div class="card-block py-10 px-11">
              <div class="h3">Lorem ipsum</div>
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
