import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultOverlay = require('components/snippets/classes/card-default-overlay').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-overlay>

  <button type="button" class="btn btn-md ${btnPrimary()}">
    overlay
  </button>

  <div class="overlay demo--overlay-animation-css">
    <div class="overlay-container max-w-3xl">
      <div class="overlay-inner">

          <div class="card ${cardDefaultOverlay()}">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="media-container rounded-t-md ratio-37.5">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
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
`
