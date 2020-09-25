import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultOverlay = require('components/snippets/classes/card-default-overlay').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<button type="button" class="btn btn-md ${btnPrimary()}" id="demo--overlay-nested-disable-toggle">
  Nested
</button>

<div class="overlay" id="demo--overlay-nested-disable"
  data-xt-overlay="{ on: false, instant: false }">
  <div class="overlay-container max-w-4xl">
    <div class="overlay-inner">

      <div class="card ${cardDefaultOverlay()}">
        <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
        <div class="card-block card-block-lg">
          <div class="h3">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>

          <div data-xt-overlay>

            <button type="button" class="btn btn-md ${btnPrimary()}">
              Overlay
            </button>

            <div class="overlay">
              <div class="overlay-container max-w-2xl">
                <div class="overlay-inner">

                  <div class="card ${cardDefaultOverlay()}">
                    <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
                    <div class="card-block card-block-lg">
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
      </div>

    </div>
  </div>
</div>
`
