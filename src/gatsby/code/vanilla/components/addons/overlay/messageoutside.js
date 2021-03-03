import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const cardMd = require('components/snippets/classes').cardMd
const cardLg = require('components/snippets/classes').cardLg
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardDefault = require('components/snippets/classes').cardDefault
const cardWhite = require('components/snippets/classes').cardWhite
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

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      left
    </button>

    <div class="xt-overlay">
      <div class="xt-backdrop bg-black opacity-25"></div>
      <div class="demo--overlay-messageoutside right-0">
        <div class="w-10/12 lg:w-8/12">
          <div class="xt-card rounded-md ${cardDefault()}">
            <div class="${cardMd()}">
              <div class="xt-h4">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
        <div class="xt-overlay-inner">

          <div class="xt-card xt-min-h-screen shadow-overlay ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="${cardMd()}">
              <div class="xt-h3">Lorem ipsum</div>
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

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      right
    </button>

    <div class="xt-overlay">
      <div class="xt-backdrop bg-black opacity-25"></div>
      <div class="demo--overlay-messageoutside left-0">
        <div class="w-10/12 lg:w-8/12">
          <div class="xt-card rounded-md ${cardDefault()}">
            <div class="${cardMd()}">
              <div class="xt-h4">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="xt-overlay-container p-0 w-screen max-w-md ml-auto mr-0">
        <div class="xt-overlay-inner">

          <div class="xt-card xt-min-h-screen shadow-overlay ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="${cardLg()}">
              <div class="xt-h3">Lorem ipsum</div>
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
