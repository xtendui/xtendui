import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: true,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider demo--2020-euroricambi-cards">

  <nav class="slider-pagination">

    <div>
      <button type="button" class="btn btn-circle" data-xt-nav="-1" title="Previous slide">
        <span class="icon-arrow-left"></span>
      </button>
    </div>

    <div class="slider-pagination_inner">
      <div class="slider-pagination_scroll">
        <button type="button" class="btn xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
        </button>
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-circle" data-xt-nav="1" title="Next slide">
        <span class="icon-arrow-right"></span>
      </button>
    </div>

  </nav>

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="container">
          <div class="slide-inner">
            <div class="slide_item">

              <div class="slide-pagination-content">
                Lorem ipsum
              </div>

              <div class="slide_assets--desktop">
                <div class="row row-default">
                  <div class="col-12 col-8-sm">
                    <div class="slide_asset">
                      <div class="slide_asset_background"></div>
                      ${img({ classes: 'media-cover' })}
                    </div>
                  </div>
                  <div class="col-12 col-4-sm">
                    <div class="slide_asset">
                      <div class="slide_asset_background"></div>
                      ${img({ classes: 'media-cover' })}
                    </div>
                  </div>
                </div>
              </div>

              <div class="slide_assets--mobile">
                <div class="slide_asset">
                  <div class="slide_asset_background"></div>
                  ${img({ classes: 'media-cover' })}
                </div>
              </div>

              <div class="slide_card">
                <div class="card card-white">
                  <div class="card-design"></div>
                  <div class="card-inner">
                    <div class="card-content">
                      <div class="card-block card-item">
                        <h3 class="card-title">
                          Lorem ipsum
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia rutrum ornare.
                        </p>
                        <a href="#" class="btn btn-primary btn-big">
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </li>

      <li class="slide">
        <div class="container">
          <div class="slide-inner">
            <div class="slide_item">

              <div class="slide-pagination-content">
                Dolor sit amet
              </div>

              <div class="slide_assets--desktop">
                <div class="row row-default">
                  <div class="col-12 col-8-sm">
                    <div class="slide_asset">
                      <div class="slide_asset_background"></div>
                      ${imgAlt({ classes: 'media-cover' })}
                    </div>
                  </div>
                  <div class="col-12 col-4-sm">
                    <div class="slide_asset">
                      <div class="slide_asset_background"></div>
                      ${imgAlt({ classes: 'media-cover' })}
                    </div>
                  </div>
                </div>
              </div>

              <div class="slide_assets--mobile">
                <div class="slide_asset">
                  <div class="slide_asset_background"></div>
                  ${imgAlt({ classes: 'media-cover' })}
                </div>
              </div>

              <div class="slide_card">
                <div class="card card-white">
                  <div class="card-design"></div>
                  <div class="card-inner">
                    <div class="card-content">
                      <div class="card-block card-item">
                        <h3 class="card-title">
                          Dolor sit amet
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet
                        </p>
                        <a href="#" class="btn btn-primary btn-big">
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </li>

      <li class="slide">
        <div class="container">
          <div class="slide-inner">
            <div class="slide_item">

              <div class="slide-pagination-content">
                Consectetur adipiscing elit
              </div>

              <div class="slide_assets--desktop">
                <div class="row row-default">
                  <div class="col-12 col-8-sm">
                    <div class="slide_asset">
                      <div class="slide_asset_background"></div>
                      ${img({ classes: 'media-cover' })}
                    </div>
                  </div>
                  <div class="col-12 col-4-sm">
                    <div class="slide_asset">
                      <div class="slide_asset_background"></div>
                      ${img({ classes: 'media-cover' })}
                    </div>
                  </div>
                </div>
              </div>

              <div class="slide_assets--mobile">
                <div class="slide_asset">
                  <div class="slide_asset_background"></div>
                  ${img({ classes: 'media-cover' })}
                </div>
              </div>

              <div class="slide_card">
                <div class="card card-white">
                  <div class="card-design"></div>
                  <div class="card-inner">
                    <div class="card-content">
                      <div class="card-block card-item">
                        <h3 class="card-title">
                          Consectetur adipiscing elit
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia rutrum ornare.
                        </p>
                        <a href="#" class="btn btn-primary btn-big">
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </li>

      <li class="slide">
        <div class="container">
          <div class="slide-inner">
            <div class="slide_item">

              <div class="slide-pagination-content">
                Nam iaculis magna eu consectetur condimentum
              </div>

              <div class="slide_assets--desktop">
                <div class="row row-default">
                  <div class="col-12 col-8-sm">
                    <div class="slide_asset">
                      <div class="slide_asset_background"></div>
                      ${imgAlt({ classes: 'media-cover' })}
                    </div>
                  </div>
                  <div class="col-12 col-4-sm">
                    <div class="slide_asset">
                      <div class="slide_asset_background"></div>
                      ${imgAlt({ classes: 'media-cover' })}
                    </div>
                  </div>
                </div>
              </div>

              <div class="slide_assets--mobile">
                <div class="slide_asset">
                  <div class="slide_asset_background"></div>
                  ${imgAlt({ classes: 'media-cover' })}
                </div>
              </div>

              <div class="slide_card">
                <div class="card card-white">
                  <div class="card-design"></div>
                  <div class="card-inner">
                    <div class="card-content">
                      <div class="card-block card-item">
                        <h3 class="card-title">
                          Nam iaculis magna eu consectetur condimentum
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia rutrum ornare.
                        </p>
                        <a href="#" class="btn btn-primary btn-big">
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </li>

    </ul>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
