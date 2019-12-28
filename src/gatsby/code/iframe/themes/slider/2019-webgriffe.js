import React from 'react'
import path from 'path'
const spinner = require('components/snippets/spinner').default

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
<div class="slider demo_2019-webgriffe">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide"
        data-light="#3E3E3E" data-dark="#000000">
        <div class="slide-inner">
          <div class="slide_content">
            <div class="slide_content_inner">

              <div class="slider_text">
                <div class="slider_text_inner">
                  <a href="#">
                    <h1 class="h1-slider anim-block_outer">
                      <span class="anim-block">
                        <span class="anim-block_line"></span>
                        <span class="anim-block_inner">
                            <span>E-Commerce Solutions</span>
                        </span>
                      </span>
                      <span class="anim-block">
                        <span class="anim-block_line"></span>
                        <span class="anim-block_inner">
                            <span>to Grow your Business</span>
                        </span>
                      </span>
                    </h1>
                    <h2 class="h2-slider anim-desc_outer">
                      <span class="anim-desc">
                        Our services
                      </span>
                    </h2>
                  </a>
                  <div class="loader--js">
                    <a href="#" class="spinner">
                      ${spinner({})}
                      <span class="spinner-icon icon-chevron-down"></span>
                      <span class="spinner-text">
                      Read More
                      </span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </li>

      <li class="slide"
        data-light="#3E3E3E" data-dark="#000000">
        <div class="slide-inner">
          <div class="slide_content">
            <div class="slide_content_inner">

              <div class="slider_text">
                <div class="slider_text_inner">
                  <a href="#">
                    <h1 class="h1-slider">
                      E-Commerce Solutions<br/>to Grow your Business
                    </h1>
                    <h2 class="h2-sliderr">
                      Our services
                    </h2>
                  </a>
                  <div class="loader--js">
                    <a href="#" class="spinner">
                      ${spinner({})}
                      <span class="spinner-icon icon-chevron-down"></span>
                      <span class="spinner-text">
                      Read More
                      </span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </li>

    </ul>
  </div>

  <div class="slider-pagination-container">
      <nav class="slider-pagination">
          <button type="button" class="xt-ignore" data-xt-pag>
            <span class="loader loader--x loader--js">
              <span class="filler">
                <span></span><span></span>
              </span>
            </span>
          </button>
      </nav>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
