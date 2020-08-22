import path from 'path'
const img = require('components/snippets/img').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefault = require('components/snippets/classes/card-default-overlay').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center">

  <div data-xt-overlay>

    <button type="button" class="btn ${btnPrimary()}">
      asset
    </button>

    <div class="overlay">
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card ${cardDefault()}">
            <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
            <div class="card-asset rounded-md">
              ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div data-xt-overlay>

    <button type="button" class="btn ${btnPrimary()}">
      asset and text
    </button>

    <div class="overlay">
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card ${cardDefault()}">
            <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
              <div class="card-asset rounded-t-md">
                ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
              </div>
              <div class="card-block">
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
`
