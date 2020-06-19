import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: false,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider demo--furniture-hero-v1">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <div class="slide_inner">
              <div class="slide_line">
                <div class="slide_line_inner">
                  <div class="slide_line_small"></div>
                  <div class="slide_line_big"></div>
                </div>
              </div>
              <div class="slide_asset">
                ${img({ classes: 'media-cover', loading: 'eager' })}
              </div>
              <a href="#" class="slide_text">
                <div class="container">
                  <div class="slide_text_inner">
                    <h2 class="h1">
                      Lorem ipsum
                    </h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <div class="slide_inner">
              <div class="slide_line">
                <div class="slide_line_inner">
                  <div class="slide_line_small"></div>
                  <div class="slide_line_big"></div>
                </div>
              </div>
              <div class="slide_asset">
                ${imgAlt({ classes: 'media-cover', loading: 'eager' })}
              </div>
              <a href="#" class="slide_text">
                <div class="container">
                  <div class="slide_text_inner">
                    <h2 class="h1">
                      Dolor sit amet
                    </h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <div class="slide_inner">
              <div class="slide_line">
                <div class="slide_line_inner">
                  <div class="slide_line_small"></div>
                  <div class="slide_line_big"></div>
                </div>
              </div>
              <div class="slide_asset">
                ${img({ classes: 'media-cover', loading: 'eager' })}
              </div>
              <a href="#" class="slide_text">
                <div class="container">
                  <div class="slide_text_inner">
                    <h2 class="h1">
                      Consectetur adipiscing elit
                    </h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <div class="slide_inner">
              <div class="slide_line">
                <div class="slide_line_inner">
                  <div class="slide_line_small"></div>
                  <div class="slide_line_big"></div>
                </div>
              </div>
              <div class="slide_asset">
                ${imgAlt({ classes: 'media-cover', loading: 'eager' })}
              </div>
              <a href="#" class="slide_text">
                <div class="container">
                  <div class="slide_text_inner">
                    <h2 class="h1">
                      Nam iaculis magna eu consectetur condimentum
                    </h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination display-none">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

  <div class="slider-navigation-sides slider-navigation-sides-prev" data-xt-nav="-1" aria-label="previous slide">
    <div class="slider-navigation-sides-btn">
      <span><span class="icon-arrow-left"></span></span>
    </div>
  </div>

  <div class="slider-navigation-sides slider-navigation-sides-next" data-xt-nav="1" aria-label="next slide">
    <div class="slider-navigation-sides-btn">
      <span><span class="icon-arrow-right"></span></span>
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
