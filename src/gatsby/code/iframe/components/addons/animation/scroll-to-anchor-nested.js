import React from 'react'
import path from 'path'

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
<div
    data-xt-sticky="{ sticky: 'fixed' }">
  <div class="note note-primary note-background note-squared">
    <div class="list list-default list-space-2">
      <a href="#anchor-0" class="btn btn-primary">
        anchor 0
      </a>
      <a href="#anchor-1" class="btn btn-primary">
        anchor 1
      </a>
      <a href="#anchor-2" class="btn btn-primary">
        anchor 2
      </a>
      <button type="button" data-xt-overlay="{ targets: '#demo--overlay-scroll-to-anchor-nested' }">
        anchors within overlay
      </button>
    </div>
  </div>
</div>

<div class="overlay overlay-default overlay-screen overlay-size-full" id="demo--overlay-scroll-to-anchor-nested">
  <div class="overlay-container">
    <div class="overlay-inner">
      <div class="overlay-design"></div>
      <div class="card card-overlay">
        <div class="card-design"></div>
        <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
        <div class="card-inner">
          <div class="card-content">
            <div class="card-asset">

              <div class="card card-default" id="anchor-overlay-0">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-block card-item">
                      <div class="h4">Lorem ipsum dolor sit amet</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
                      <div class="list list-default list-space-2">
                        <a href="#anchor-overlay-0" class="btn btn-default">
                          anchor overlay 0
                        </a>
                        <a href="#anchor-overlay-1" class="btn btn-default">
                          anchor overlay 1
                        </a>
                        <a href="#anchor-overlay-2" class="btn btn-default">
                          anchor overlay 2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/>

              <div class="card card-default" id="anchor-overlay-1">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-block card-item">
                      <div class="h4">Lorem ipsum dolor sit amet</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
                      <div class="list list-default list-space-2">
                        <a href="#anchor-overlay-0" class="btn btn-default">
                          anchor overlay 0
                        </a>
                        <a href="#anchor-overlay-1" class="btn btn-default">
                          anchor overlay 1
                        </a>
                        <a href="#anchor-overlay-2" class="btn btn-default">
                          anchor overlay 2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/>

              <div class="card card-default" id="anchor-overlay-2">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-block card-item">
                      <div class="h4">Lorem ipsum dolor sit amet</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
                      <div class="list list-default list-space-2">
                        <a href="#anchor-overlay-0" class="btn btn-default">
                          anchor overlay 0
                        </a>
                        <a href="#anchor-overlay-1" class="btn btn-default">
                          anchor overlay 1
                        </a>
                        <a href="#anchor-overlay-2" class="btn btn-default">
                          anchor overlay 2
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
    </div>
  </div>
</div>

<div class="container">

  <div class="card card-default" id="anchor-0">
    <div class="card-design"></div>
    <div class="card-inner">
      <div class="card-content">
        <div class="card-block card-item">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
          <div class="list list-default list-space-2">
            <a href="#anchor-0" class="btn btn-default">
              anchor 0
            </a>
            <a href="#anchor-1" class="btn btn-default">
              anchor 1
            </a>
            <a href="#anchor-2" class="btn btn-default">
              anchor 2
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>

  <div class="demo--scroll-to-anchor-nested">

    <div class="card card-default" id="anchor-nested-0">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-item">
            <div class="h4">Lorem ipsum dolor sit amet</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
            <div class="list list-default list-space-2">
              <a href="#anchor-nested-0" class="btn btn-default">
                anchor nested 0
              </a>
              <a href="#anchor-nested-1" class="btn btn-default">
                anchor nested 1
              </a>
              <a href="#anchor-nested-2" class="btn btn-default">
                anchor nested 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/>

    <div class="card card-default" id="anchor-nested-1">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-item">
            <div class="h4">Lorem ipsum dolor sit amet</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
            <div class="list list-default list-space-2">
              <a href="#anchor-nested-0" class="btn btn-default">
                anchor nested 0
              </a>
              <a href="#anchor-nested-1" class="btn btn-default">
                anchor nested 1
              </a>
              <a href="#anchor-nested-2" class="btn btn-default">
                anchor nested 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/>

    <div class="card card-default" id="anchor-nested-2">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-item">
            <div class="h4">Lorem ipsum dolor sit amet</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
            <div class="list list-default list-space-2">
              <a href="#anchor-nested-0" class="btn btn-default">
                anchor nested 0
              </a>
              <a href="#anchor-nested-1" class="btn btn-default">
                anchor nested 1
              </a>
              <a href="#anchor-nested-2" class="btn btn-default">
                anchor nested 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>

  <div class="card card-default" id="anchor-1">
    <div class="card-design"></div>
    <div class="card-inner">
      <div class="card-content">
        <div class="card-block card-item">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
          <div class="list list-default list-space-2">
            <a href="#anchor-0" class="btn btn-default">
              anchor 0
            </a>
            <a href="#anchor-1" class="btn btn-default">
              anchor 1
            </a>
            <a href="#anchor-2" class="btn btn-default">
              anchor 2
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>

  <div class="card card-default" id="anchor-2">
    <div class="card-design"></div>
    <div class="card-inner">
      <div class="card-content">
        <div class="card-block card-item">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
          <div class="list list-default list-space-2">
            <a href="#anchor-0" class="btn btn-default">
              anchor 0
            </a>
            <a href="#anchor-1" class="btn btn-default">
              anchor 1
            </a>
            <a href="#anchor-2" class="btn btn-default">
              anchor 2
            </a>
          </div>
        </div>
      </div>
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
