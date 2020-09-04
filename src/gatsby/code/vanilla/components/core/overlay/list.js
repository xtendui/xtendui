import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultOverlay = require('components/snippets/classes/card-default-overlay').default
const cardPrimaryOverlay = require('components/snippets/classes/card-primary-overlay').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center">

  <div data-xt-overlay>

    <button type="button" class="btn btn-medium ${btnPrimary()}">
      list
    </button>

    <div class="overlay">
      <div class="overlay-container max-w-4xl">
        <div class="overlay-inner">

          <div class="card ${cardDefaultOverlay()}">
            <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
            <div class="card-block card-block-medium">
              <div class="list list-space-2 flex-no-wrap items-baseline">
                <div>
                  <span class="icon-chevron-right"></span>
                </div>
                <div>
                  <div class="h4">Lorem ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
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
