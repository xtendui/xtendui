import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardWhite = require('components/snippets/classes/card-white').default
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

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      Separator
    </button>

    <div class="xt-overlay">
      <div class="xt-backdrop xt-overlay-ui bg-black opacity-25"></div>
      <div class="xt-overlay-container max-w-3xl">
        <div class="xt-overlay-inner">

          <div class="xt-card rounded-md shadow-overlay ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="md:xt-card-group">
              <div class="text-base p-8 md:w-7/12">
                <div class="xt-h4 ">Lorem ipsum</div>
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              </div>
              <div class="border-t md:w-5/12 md:border-t-0 sm:border-l border-solid border-gray-500">
                <div class="text-sm p-6">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                </div>
                <div class="text-base p-8 border-t border-solid border-gray-500">
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
