import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardStickyDefault = require('components/snippets/classes/card-sticky-default').default
const cardStickyPrimary = require('components/snippets/classes/card-sticky-primary').default
const cardDefaultOverlayScreen = require('components/snippets/classes/card-default-overlay-screen').default
const iconX = require('components/snippets/icons').iconX
const iconChevronDown = require('components/snippets/icons').iconChevronDown

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
    <div class="card ${cardStickyPrimary()}">
      <div class="h4">Header</div>
    </div>
  </header>

  <main class="site_main">

    <div class="container">
      <div class="row row-4 lg:row-6 items-stretch">

        <div class="w-full md:w-6/12 lg:w-7/12">
          <div class="relative md:py-6">
            <div class="product-gallery">

              <div class="list flex-col">

                <a href="#product-image-overlay-1" class="w-full">
                  <div class="media-container" data-xt-overlay="{ targets: '#overlay-product-images' }">
                    <div class="media-mask absolute inset-0 z-active pointer-events-none bg-white transform -translate-y-full"></div>
                    <div class="media-inner relative">
                      <img class="media" id="product-image-1" src="/img.svg" loading="lazy" alt=""/>
                    </div>
                  </div>
                </a>

                <a href="#product-image-overlay-3" class="w-full">
                  <div class="media-container" data-xt-overlay="{ targets: '#overlay-product-images' }">
                    <div class="media-mask absolute inset-0 z-active pointer-events-none bg-white transform -translate-y-full"></div>
                    <div class="media-inner relative">
                      <img class="media" id="product-image-2" src="/img.svg" loading="lazy" alt=""/>
                    </div>
                  </div>
                </a>

                <a href="#product-image-overlay-4" class="w-full">
                  <div class="media-container" data-xt-overlay="{ targets: '#overlay-product-images' }">
                    <div class="media-mask absolute inset-0 z-active pointer-events-none bg-white transform -translate-y-full"></div>
                    <div class="media-inner relative">
                      <img class="media" id="product-image-3" src="/img.svg" loading="lazy" alt=""/>
                    </div>
                  </div>
                </a>

                <a href="#product-image-overlay-4" class="w-full">
                  <div class="media-container" data-xt-overlay="{ targets: '#overlay-product-images' }">
                    <div class="media-mask absolute inset-0 z-active pointer-events-none bg-white transform -translate-y-full"></div>
                    <div class="media-inner relative">
                      <img class="media" id="product-image-4" src="/img.svg" loading="lazy" alt=""/>
                    </div>
                  </div>
                </a>

                <a href="#product-image-overlay-5" class="w-full">
                  <div class="media-container" data-xt-overlay="{ targets: '#overlay-product-images' }">
                    <div class="media-mask absolute inset-0 z-active pointer-events-none bg-white transform -translate-y-full"></div>
                    <div class="media-inner relative">
                      <img class="media" id="product-image-5" src="/img.svg" loading="lazy" alt=""/>
                    </div>
                  </div>
                </a>

              </div>

              <div class="absolute h-full top-0 right-0 md:hidden">
                <div class="list flex-col h-full justify-center">

                  <a href="#product-image-1" class="product-dot group py-1.5 px-2 flex items-center justify-center" title="Go to image 1">
                    <div class="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"></div>
                  </a>

                  <a href="#product-image-2" class="product-dot group py-1.5 px-2 flex items-center justify-center" title="Go to image 2">
                    <div class="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"></div>
                  </a>

                  <a href="#product-image-3" class="product-dot group py-1.5 px-2 flex items-center justify-center" title="Go to image 3">
                    <div class="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"></div>
                  </a>

                  <a href="#product-image-4" class="product-dot group py-1.5 px-2 flex items-center justify-center" title="Go to image 4">
                    <div class="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"></div>
                  </a>

                  <a href="#product-image-5" class="product-dot group py-1.5 px-2 flex items-center justify-center" title="Go to image 5">
                    <div class="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"></div>
                  </a>

                </div>
              </div>

              <div class="overlay overlay-screen" id="overlay-product-images">
                <div class="overlay-container">
                  <div class="overlay-inner">

                    <div class="card ${cardDefaultOverlayScreen()} items-center justify-center">
                      <div class="btn btn-close p-5 text-2xl fixed z-top" aria-label="Close">
                        ${iconX()}
                      </div>
                      <div class="w-full">

                        <div class="media-container">
                          <div class="media-inner relative">
                            <img class="media" id="product-image-overlay-1" src="/img.svg" loading="lazy" alt=""/>
                          </div>
                        </div>

                        <div class="media-container">
                          <div class="media-inner relative">
                            <img class="media" id="product-image-overlay-2" src="/img.svg" loading="lazy" alt=""/>
                          </div>
                        </div>

                        <div class="media-container">
                          <div class="media-inner relative">
                            <img class="media" id="product-image-overlay-3" src="/img.svg" loading="lazy" alt=""/>
                          </div>
                        </div>

                        <div class="media-container">
                          <div class="media-inner relative">
                            <img class="media" id="product-image-overlay-4" src="/img.svg" loading="eagelazyr" alt=""/>
                          </div>
                        </div>

                        <div class="media-container">
                          <div class="media-inner relative">
                            <img class="media" id="product-image-overlay-5" src="/img.svg" loading="lazy" alt=""/>
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

        <div class="w-full md:w-6/12 lg:w-5/12" id="product-continue-target">
          <div class="sticky-flow-filler pointer-events-none absolute md:relative"></div>
          <div class="md:py-12 md:sticky sticky-flow">

            <h1>
              Lorem ipsum dolor sit amet
            </h1>

            <div class="h5 mb-6">
              €&nbsp;229,00
            </div>

            <a href="#" class="btn btn-lg mb-6 ${btnPrimary()}">
              Add to cart
            </a>

            <div class="text-lg text-opacity-75">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>
              <p>Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.</p>
            </div>

          </div>
        </div>

      </div>
    </div>

    <a href="#product-continue-target" class="product-continue fixed lg:hidden p-4 z-sticky bottom-0 inset-x-0 text-4xl text-center bg-gradient-to-b from-transparent to-white">
      ${iconChevronDown({ classes: 'icon-md' })}
    </a>

  </main>

  <footer class="site_footer">
    <div class="card h-32 ${cardStickyDefault()}">
      <div class="h4">Footer</div>
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
