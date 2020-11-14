import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardWhite = require('components/snippets/classes/card-white').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-overlay>

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      default
    </button>

    <div class="overlay">
      <div class="overlay-container max-w-3xl">
        <div class="overlay-inner">

          <div class="card rounded-md shadow-overlay ${cardWhite()}">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="md:card-group">
              <div class="card-md md:w-7/12">
                <div class="h4">Lorem ipsum</div>
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              </div>
              <div class="border-t md:w-5/12 md:border-t-0 sm:border-l border-solid border-gray-500">
                <div class="card-sm">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                </div>
                <div class="card-md border-t border-solid border-gray-500">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
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
