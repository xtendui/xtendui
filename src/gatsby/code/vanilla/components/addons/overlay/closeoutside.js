import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const buttonCloseOutside = require('components/snippets/classes/button-closeoutside').default
const cardWhite = require('components/snippets/classes/card-white').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center justify-center">

  <div data-xt-overlay>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      Default
    </button>

    <div class="xt-overlay">
      <div class="xt-overlay-container max-w-3xl">
        <div class="xt-overlay-inner">

          <div class="xt-card rounded-md md:rounded-tr-none shadow-overlay ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl ${buttonCloseOutside()} md:p-3 md:right-auto md:left-100" aria-label="Close">
              ${iconX()}
            </button>
            <div class="text-base p-8">
              <div class="xt-h4 ">Lorem ipsum</div>
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

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      Left
    </button>

    <div class="xt-overlay">
      <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
        <div class="xt-overlay-inner">

          <div class="xt-card xt-min-h-screen shadow-overlay ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl ${buttonCloseOutside()} md:p-3 md:right-auto md:left-100" aria-label="Close">
              ${iconX()}
            </button>
            <div class="text-base p-8">
              <div class="xt-h4 ">Lorem ipsum</div>
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

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      Right
    </button>

    <div class="xt-overlay">
      <div class="xt-overlay-container p-0 w-screen max-w-md ml-auto mr-0">
        <div class="xt-overlay-inner">

          <div class="xt-card xt-min-h-screen shadow-overlay ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl ${buttonCloseOutside()} md:p-3 md:left-auto md:right-100" aria-label="Close">
              ${iconX()}
            </button>
            <div class="text-base p-8">
              <div class="xt-h4 ">Lorem ipsum</div>
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
