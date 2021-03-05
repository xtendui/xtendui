import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const cardSm = require('components/snippets/classes').cardSm
const cardMd = require('components/snippets/classes').cardMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardWhite = require('components/snippets/classes').cardWhite
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-overlay>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      asset
    </button>

    <div class="xt-overlay">
      <div class="xt-backdrop bg-black opacity-25"></div>
      <div class="xt-overlay-container max-w-3xl">
        <div class="xt-overlay-inner">

          <div class="xt-card rounded-md shadow-overlay ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="xt-media-container bg-gray-200 rounded-md xt-ratio-37.5">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div data-xt-overlay>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      asset and text
    </button>

    <div class="xt-overlay">
      <div class="xt-backdrop bg-black opacity-25"></div>
      <div class="xt-overlay-container max-w-3xl">
        <div class="xt-overlay-inner">

          <div class="xt-card rounded-md shadow-overlay ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="xt-media-container bg-gray-200 rounded-t-md xt-ratio-37.5">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
            </div>
            <div class="${cardMd()}">
              <div class="xt-h4">Lorem ipsum</div>
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
      text
    </button>

    <div class="xt-overlay">
      <div class="xt-backdrop bg-black opacity-25"></div>
      <div class="xt-overlay-container max-w-3xl">
        <div class="xt-overlay-inner">

          <div class="xt-card rounded-md shadow-overlay ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="${cardMd()} rounded-t-md bg-gray-300">
              <div class="xt-h4">Lorem ipsum</div>
            </div>
            <div class="${cardMd()}">
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
            </div>
            <div class="${cardSm()} pt-0">
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
