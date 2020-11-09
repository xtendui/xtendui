import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultOverlayScreen = require('components/snippets/classes/card-default-overlay-screen').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center justify-center demo--overlay-class-html">

  <div data-xt-overlay="{ classHtml: 'demo--overlay-class-html-left' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      left
    </button>

    <div class="overlay overlay-screen duration-500"> <!-- needed for animation time, put max animation time -->
      <div class="overlay-container max-w-md ml-0 mr-auto">
        <div class="overlay-inner transform transition-all duration-500 opacity-0 translate-y-2 active:opacity-100 active:translate-y-0">

          <div class="card ${cardDefaultOverlayScreen()}">
            <div class="btn btn-close p-5 text-2xl fixed z-top" aria-label="Close">
              ${iconX()}
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

  <div data-xt-overlay="{ classHtml: 'demo--overlay-class-html-right' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      right
    </button>

    <div class="overlay overlay-screen duration-500"> <!-- needed for animation time, put max animation time -->
      <div class="overlay-container max-w-md ml-auto mr-0">
        <div class="overlay-inner transform transition-all duration-500 opacity-0 translate-y-2 active:opacity-100 active:translate-y-0">

          <div class="card ${cardDefaultOverlayScreen()}">
            <div class="btn btn-close p-5 text-2xl fixed z-top" aria-label="Close">
              ${iconX()}
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

</div>
`
