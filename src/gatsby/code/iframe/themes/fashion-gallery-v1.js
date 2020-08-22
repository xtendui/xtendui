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
<div class="site_wrapper">

  <header class="site_header">
    <div class="card card-primary card-squared" style="opacity: 0.5; text-align: center;">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-item">
            <div class="h4">Header</div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="site_main">
    <div class="product-page">

      <div class="container">
        <div class="product-page_inner">
          <div class="row">

            <div class="product-page_left_col">
              <div class="product-page_left_outer">
                <div class="product-page_left">

                  <div class="product-page_images">
                    <div class="list-block">
                      <a href="#product-image-overlay-0" class="product-page_image">
                        <div class="media-container media-container-responsive"
                          data-xt-overlay="{ targets: '#overlay--product-page_images' }">
                          <div class="media-inner">
                            <img class="media" id="product-image-0" src="/img.svg" loading="lazy" alt=""/>
                          </div>
                        </div>
                      </a>
                      <a href="#product-image-overlay-1" class="product-page_image">
                        <div class="media-container media-container-responsive"
                          data-xt-overlay="{ targets: '#overlay--product-page_images' }">
                          <div class="media-inner">
                            <img class="media" id="product-image-1" src="/img.svg" loading="lazy" alt=""/>
                          </div>
                        </div>
                      </a>
                      <a href="#product-image-overlay-3" class="product-page_image">
                        <div class="media-container media-container-responsive"
                          data-xt-overlay="{ targets: '#overlay--product-page_images' }">
                          <div class="media-inner">
                            <img class="media" id="product-image-2" src="/img.svg" loading="lazy" alt=""/>
                          </div>
                        </div>
                      </a>
                      <a href="#product-image-overlay-4" class="product-page_image">
                        <div class="media-container media-container-responsive"
                          data-xt-overlay="{ targets: '#overlay--product-page_images' }">
                          <div class="media-inner">
                            <img class="media" id="product-image-3" src="/img.svg" loading="lazy" alt=""/>
                          </div>
                        </div>
                      </a>
                      <a href="#product-image-overlay-4" class="product-page_image">
                        <div class="media-container media-container-responsive"
                          data-xt-overlay="{ targets: '#overlay--product-page_images' }">
                          <div class="media-inner">
                            <img class="media" id="product-image-4" src="/img.svg" loading="lazy" alt=""/>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="product-page_images_nav">
                    <div class="list-block">
                      <a href="#product-image-0" class="product-page_images_nav_item" title="Go to image 0">
                        <div class="product-page_images_nav_item_inner">
                          <span></span>
                        </div>
                      </a>
                      <a href="#product-image-1" class="product-page_images_nav_item" title="Go to image 1">
                        <div class="product-page_images_nav_item_inner">
                          <span></span>
                        </div>
                      </a>
                      <a href="#product-image-2" class="product-page_images_nav_item" title="Go to image 2">
                        <div class="product-page_images_nav_item_inner">
                          <span></span>
                        </div>
                      </a>
                      <a href="#product-image-3" class="product-page_images_nav_item" title="Go to image 3">
                        <div class="product-page_images_nav_item_inner">
                          <span></span>
                        </div>
                      </a>
                      <a href="#product-image-4" class="product-page_images_nav_item" title="Go to image 3">
                        <div class="product-page_images_nav_item_inner">
                          <span></span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="overlay overlay-default overlay-screen overlay-size-full" id="overlay--product-page_images">
                    <div class="overlay-container">
                      <div class="overlay-inner">
                        <div class="overlay-design"></div>
                        <div class="card card-overlay">
                          <div class="card-design"></div>
                          <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
                          <div class="card-inner">
                            <div class="card-content">
                              <div class="card-asset">
                                <div class="list-block">
                                  <div class="media-container media-container-responsive">
                                    <div class="media-inner">
                                      <img class="media" id="product-image-overlay-0" src="/img.svg" loading="eager" alt=""/>
                                    </div>
                                  </div>
                                  <div class="media-container media-container-responsive">
                                    <div class="media-inner">
                                      <img class="media" id="product-image-overlay-1" src="/img.svg" loading="eager" alt=""/>
                                    </div>
                                  </div>
                                  <div class="media-container media-container-responsive">
                                    <div class="media-inner">
                                      <img class="media" id="product-image-overlay-2" src="/img.svg" loading="eager" alt=""/>
                                    </div>
                                  </div>
                                  <div class="media-container media-container-responsive">
                                    <div class="media-inner">
                                      <img class="media" id="product-image-overlay-3" src="/img.svg" loading="eager" alt=""/>
                                    </div>
                                  </div>
                                  <div class="media-container media-container-responsive">
                                    <div class="media-inner">
                                      <img class="media" id="product-image-overlay-4" src="/img.svg" loading="eager" alt=""/>
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
            </div>

            <div class="product-page_right_col" id="product-page_continue-target">
              <div class="product-page_right">

                <h1 class="product-page_title">
                  Lorem ipsum dolor sit amet
                </h1>

                <div class="product-page_price">
                  €&nbsp;229,00
                </div>

                <div class="product-page_actions">
                  <a href="#" class="btn btn-primary btn-big btn-wide btn-tall">
                  Add to cart
                  </a>
                </div>

                <div class="product-page_details">
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>

                <div class="product-page_attributes">
                  <dl class="dl-line">
                    <dt>
                      Product Code:
                    </dt>
                    <dd>
                      012345
                    </dd>
                    <dt>
                      Internal Code:
                    </dt>
                    <dd>
                      543210
                    </dd>
                  </dl>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <a href="#product-page_continue-target" class="product-page_continue">
        <span class="icon-xt-chevron-down"></span>
      </a>

      <div class="product-page_limit-bottom"></div>

    </div>
  </main>

  <footer class="site_footer">
    <div class="card card-primary card-squared" style="opacity: 0.5; padding: 30rem 0; text-align: center;">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-item">
            <div class="h4">Footer</div>
          </div>
        </div>
      </div>
    </div>
  </footer>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
