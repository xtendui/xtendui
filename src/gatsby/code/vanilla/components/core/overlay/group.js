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

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      group
    </button>

    <div class="overlay">
      <div class="overlay-container max-w-3xl">
        <div class="overlay-inner">

          <div class="card rounded-md shadow-overlay ${cardWhite()}">
            <button type="button" class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="md:card-group">
              <div class="text-base p-8 md:w-7/12">
                <div class="h4">Lorem ipsum</div>
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              </div>
              <div class="text-sm p-6 md:w-5/12 rounded-b-md md:rounded-b-none md:rounded-r-md bg-gray-400">
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div data-xt-overlay>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      group complex
    </button>

    <div class="overlay">
      <div class="overlay-container max-w-3xl">
        <div class="overlay-inner">

          <div class="card rounded-md shadow-overlay ${cardWhite()}">
            <button type="button" class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="md:card-group">
              <div class="text-base p-8 md:w-7/12 bg-gray-400 md:rounded-tl-md">
                <div class="h4">Lorem ipsum</div>
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              </div>
              <div class="md:w-5/12">
                <div class="text-sm p-6 bg-gray-500 md:rounded-tr-md">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                </div>
                <div class="text-base p-8">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                </div>
              </div>
            </div>
            <div class="media-container bg-gray-700 rounded-b-md ratio-25">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

</div>
`
