import React from 'react'
import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardStickyDefault = require('components/snippets/classes/card-sticky-default').default
const cardStickyPrimary = require('components/snippets/classes/card-sticky-primary').default
const iconX = require('components/snippets/icons').iconX

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-sticky="{ sticky: 'fixed' }">
  <div class="card ${cardStickyPrimary()}">
    <div class="list list-space-2">
      <a href="#anchor-0" class="btn btn-md ${btnPrimary()}">
        anchor 0
      </a>
      <a href="#anchor-1" class="btn btn-md ${btnPrimary()}">
        anchor 1
      </a>
      <a href="#anchor-2" class="btn btn-md ${btnPrimary()}">
        anchor 2
      </a>
      <button type="button" class="btn btn-md ${btnDefault()}" data-xt-overlay="{ targets: '#demo--overlay-scroll-to-anchor' }">
        anchors within overlay
      </button>
    </div>
  </div>
</div>

<div class="overlay overlay-screen" id="demo--overlay-scroll-to-anchor">
  <div class="overlay-container p-0">
    <div class="overlay-inner">

      <div class="card items-center justify-center">
        <div class="btn btn-close" aria-label="Close">
          ${iconX()}
        </div>
        <div class="max-w-3xl">

          <div class="card ${cardStickyDefault()}" id="anchor-overlay-0">
            <div class="h4">Lorem ipsum dolor sit amet</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
            <div class="list list-space-2">
              <a href="#anchor-overlay-0" class="btn btn-md ${btnDefault()}">
                anchor overlay 0
              </a>
              <a href="#anchor-overlay-1" class="btn btn-md ${btnDefault()}">
                anchor overlay 1
              </a>
              <a href="#anchor-overlay-2" class="btn btn-md ${btnDefault()}">
                anchor overlay 2
              </a>
            </div>
          </div>

          <br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/>

          <div class="card ${cardStickyDefault()}" id="anchor-overlay-1">
            <div class="h4">Lorem ipsum dolor sit amet</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
            <div class="list list-space-2">
              <a href="#anchor-overlay-0" class="btn btn-md ${btnDefault()}">
                anchor overlay 0
              </a>
              <a href="#anchor-overlay-1" class="btn btn-md ${btnDefault()}">
                anchor overlay 1
              </a>
              <a href="#anchor-overlay-2" class="btn btn-md ${btnDefault()}">
                anchor overlay 2
              </a>
            </div>
          </div>

          <br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/>

          <div class="card ${cardStickyDefault()}" id="anchor-overlay-2">
            <div class="h4">Lorem ipsum dolor sit amet</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
            <div class="list list-space-2">
              <a href="#anchor-overlay-0" class="btn btn-md ${btnDefault()}">
                anchor overlay 0
              </a>
              <a href="#anchor-overlay-1" class="btn btn-md ${btnDefault()}">
                anchor overlay 1
              </a>
              <a href="#anchor-overlay-2" class="btn btn-md ${btnDefault()}">
                anchor overlay 2
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>

<div class="container">

  <div class="card ${cardStickyDefault()}" id="anchor-0">
    <div class="h4">Lorem ipsum dolor sit amet</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
    <div class="list list-space-2">
      <a href="#anchor-0" class="btn btn-md ${btnDefault()}">
        anchor 0
      </a>
      <a href="#anchor-1" class="btn btn-md ${btnDefault()}">
        anchor 1
      </a>
      <a href="#anchor-2" class="btn btn-md ${btnDefault()}">
        anchor 2
      </a>
    </div>
  </div>

  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>

  <div class="card ${cardStickyDefault()}" id="anchor-1">
    <div class="h4">Lorem ipsum dolor sit amet</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
    <div class="list list-space-2">
      <a href="#anchor-0" class="btn btn-md ${btnDefault()}">
        anchor 0
      </a>
      <a href="#anchor-1" class="btn btn-md ${btnDefault()}">
        anchor 1
      </a>
      <a href="#anchor-2" class="btn btn-md ${btnDefault()}">
        anchor 2
      </a>
    </div>
  </div>

  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>

  <div class="card ${cardStickyDefault()}" id="anchor-2">
    <div class="h4">Lorem ipsum dolor sit amet</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
    <div class="list list-space-2">
      <a href="#anchor-0" class="btn btn-md ${btnDefault()}">
        anchor 0
      </a>
      <a href="#anchor-1" class="btn btn-md ${btnDefault()}">
        anchor 1
      </a>
      <a href="#anchor-2" class="btn btn-md ${btnDefault()}">
        anchor 2
      </a>
    </div>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
