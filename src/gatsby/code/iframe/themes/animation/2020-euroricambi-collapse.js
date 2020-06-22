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
  Drop
</div>

<div class="list list-default list-space-small align-items-center">

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
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
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

<div class="list list-default list-space-small align-items-center">

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      overlay
    </button>
    <div class="overlay overlay-default">
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
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
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

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      overlay screen full
    </button>
    <div class="overlay overlay-default overlay-screen overlay-size-full">
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
    <div class="overlay overlay-default overlay-position overlay-position-left">
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
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
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

<div class="h5 header-block">
  Group
</div>

<div class="list list-default list-space-small align-items-center">

  <form class="form-default form-small flex-full"
        data-xt-toggle="{ elements: '.form-group > .btn', targets: '.group' }">
    <div class="form-group form-group-last">
      <button type="button" class="btn btn-primary">
        group
      </button>
      <div class="group group-default">
        <div class="group-inner">
          <button type="button" class="btn btn-default btn-large">
            ipsum
          </button>
        </div>
        <div class="group-inner">
          <input type="text" class="form-item" />
        </div>
      </div>
    </button>
  </form>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
