import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="h5 header-block">
  Button
</div>

<div class="list list-default list-space-small align-items-center demo--2019-xtend">

  <button type="button" class="btn btn-default">
    button
  </button>

  <button type="button" class="btn btn-primary">
    button primary
  </button>

  <button type="button" class="btn btn-text">
    button text
  </button>

  <button type="button" class="btn btn-link">
    button link
  </button>

</div>

<div class="h5 header-block">
  Drop
</div>

<div class="list list-default list-space-small align-items-center demo--2019-xtend">

  <div class="drop-container" data-xt-drop="{ targetsInner: ':scope > .drop-inner' }">
    <button type="button" class="btn btn-primary">
      drop
    </button>
    <div class="drop drop-default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop="{ targetsInner: ':scope > .drop-inner' }">
    <button type="button" class="btn btn-primary">
      drop card
    </button>
    <div class="drop drop-default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <div class="card card-drop">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">Primary</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  <a href="#" class="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</div>

<div class="h5 header-block">
  Overlay
</div>

<div class="list list-default list-space-small align-items-center demo--2019-xtend">

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      overlay
    </button>
    <div class="overlay overlay-default demo--2019-xtend">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">Lorem ipsum</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                    ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                    justo.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                    ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                    justo.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      overlay screen full
    </button>
    <div class="overlay overlay-default overlay-screen overlay-size-full demo--2019-xtend">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

            <div class="card card-overlay">
              <div class="card-design"></div>
              <div class="btn btn-close" aria-label="Close"></div>
              <div class="card-inner">
                <div class="card-content">
                  <div class="card-asset">
                    ${img({ classes: 'media-cover', ratio: '100%' })}
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      overlay position
    </button>
    <div class="overlay overlay-default overlay-position overlay-position-left demo--2019-xtend">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">Lorem ipsum</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                    ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                    justo.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                    ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                    justo.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</div>

<div class="h5 header-block">
  Card
</div>

<div class="row row-default">

  <div class="col-12 col-6-sm">
    <a role="button" class="card card-default demo--2019-xtend">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-item">
            <div class="card-title">Primary</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </a>
  </div>

  <div class="col-12 col-6-sm">
    <a role="button" class="card card-primary demo--2019-xtend">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-item">
            <div class="card-title">Default</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </a>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
