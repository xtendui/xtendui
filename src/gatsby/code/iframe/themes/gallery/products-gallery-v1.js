import React from 'react'
import path from 'path'

const buttonLg = require('components/snippets/classes').buttonLg
const cardSm = require('components/snippets/classes').cardSm
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardDefault = require('components/snippets/classes').cardDefault
const cardPrimary = require('components/snippets/classes').cardPrimary
const cardWhite = require('components/snippets/classes').cardWhite
const iconX = require('components/snippets/icons').iconX
const iconChevronDown = require('components/snippets/icons').iconChevronDown

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<!-- For seo purpose add product metadata https://developers.google.com/search/docs/data-types/product -->

<div class="site-wrapper">

  <header class="site-header">
    <div class="xt-card ${cardSm()} ${cardPrimary()}">
      <div class="xt-h4">Header</div>
    </div>
  </header>

  <main class="site-main">

    <div class="container">
      <div class="xt-row xt-row-8 lg:xt-row-12 items-stretch">

        <div class="w-full md:w-5/12 lg:w-6/12 xl:w-7/12">
          <div class="relative md:py-12">
            <div class="product-gallery">

              <div class="xt-list flex-col">

                <a href="#product-image-overlay-1" class="product-image w-full" id="product-image-1" title="Expand image 1">
                  <div class="xt-media-container bg-gray-200" data-xt-overlay="{ targets: '#overlay--product-images' }">
                    <div class="xt-media-inner relative">
                      <img class="xt-media" src="/img.svg" loading="eager" alt=""/>
                    </div>
                    <div class="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>
                  </div>
                </a>

                <a href="#product-image-overlay-2" class="product-image w-full" id="product-image-2" title="Expand image 2">
                  <div class="xt-media-container bg-gray-200" data-xt-overlay="{ targets: '#overlay--product-images' }">
                    <div class="xt-media-inner relative">
                      <img class="xt-media" src="/img-alt.svg" loading="eager" alt=""/>
                    </div>
                    <div class="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>
                  </div>
                </a>

                <a href="#product-image-overlay-3" class="product-image w-full" id="product-image-3" title="Expand image 3">
                  <div class="xt-media-container bg-gray-200" data-xt-overlay="{ targets: '#overlay--product-images' }">
                    <div class="xt-media-inner relative">
                      <img class="xt-media" src="/img.svg" loading="eager" alt=""/>
                    </div>
                    <div class="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>
                  </div>
                </a>

                <a href="#product-image-overlay-4" class="product-image w-full" id="product-image-4" title="Expand image 4">
                  <div class="xt-media-container bg-gray-200" data-xt-overlay="{ targets: '#overlay--product-images' }">
                    <div class="xt-media-inner relative">
                      <img class="xt-media" src="/img-alt.svg" loading="eager" alt=""/>
                    </div>
                    <div class="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>
                  </div>
                </a>

                <a href="#product-image-overlay-5" class="product-image w-full" id="product-image-5" title="Expand image 5">
                  <div class="xt-media-container bg-gray-200" data-xt-overlay="{ targets: '#overlay--product-images' }">
                    <div class="xt-media-inner relative">
                      <img class="xt-media"" src="/img.svg" loading="eager" alt=""/>
                    </div>
                    <div class="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>
                  </div>
                </a>

              </div>

              <div class="absolute h-full bottom-0 left-0 right-0 md:hidden">
                <div class="xt-list flex-col h-full justify-center">

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

              <div class="xt-overlay ease-in-out-quint duration-500 opacity-0 active:ease-out-quint active:opacity-100" id="overlay--product-images">
                <div class="xt-backdrop xt-overlay-ui bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
                <div class="xt-overlay-container p-0">
                  <button type="button" class="xt-button xt-dismiss fixed z-last mr-2 top-0 right-0 p-5 text-2xl" aria-label="Close">
                    ${iconX()}
                  </button>
                  <div class="xt-overlay-inner">

                    <div class="xt-card items-center justify-center shadow-overlay ${cardWhite()}">
                      <div class="w-full">

                        <div class="xt-media-container bg-gray-200">
                          <div class="xt-media-inner relative">
                            <img class="xt-media" id="product-image-overlay-1" src="/img.svg" loading="lazy" alt=""/>
                          </div>
                        </div>

                        <div class="xt-media-container bg-gray-200">
                          <div class="xt-media-inner relative">
                            <img class="xt-media" id="product-image-overlay-2" src="/img-alt.svg" loading="lazy" alt=""/>
                          </div>
                        </div>

                        <div class="xt-media-container bg-gray-200">
                          <div class="xt-media-inner relative">
                            <img class="xt-media" id="product-image-overlay-3" src="/img.svg" loading="lazy" alt=""/>
                          </div>
                        </div>

                        <div class="xt-media-container bg-gray-200">
                          <div class="xt-media-inner relative">
                            <img class="xt-media" id="product-image-overlay-4" src="/img-alt.svg" loading="eagelazyr" alt=""/>
                          </div>
                        </div>

                        <div class="xt-media-container bg-gray-200">
                          <div class="xt-media-inner relative">
                            <img class="xt-media" id="product-image-overlay-5" src="/img.svg" loading="lazy" alt=""/>
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

        <div class="w-full md:w-7/12 lg:w-6/12 xl:w-5/12" id="product-continue-target" data-xt-stickyflow>
          <div class="stickyflow-filler pointer-events-none absolute md:relative"></div>
          <div class="pb-12 md:py-12 md:sticky stickyflow">

            <h1 class="xt-h2 ">
              Lorem ipsum dolor sit amet
            </h1>

            <div class="xt-h5  mb-6">
              €&nbsp;229,00
            </div>

            <a href="#" class="xt-button ${buttonLg()} rounded-md mb-6 ${buttonPrimary()}">
              Add to cart
            </a>

            <div class="text-opacity-75">
              <p><strong>(navigate on mobile for different behaviour)</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>
              <p>Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>
            </div>

          </div>
        </div>

      </div>
    </div>

    <a href="#product-continue-target" class="product-continue fixed md:hidden p-4 z-sticky bottom-0 inset-x-0 text-4xl text-center bg-gradient-to-b from-transparent to-white" title="Scroll to content">
      ${iconChevronDown()}
    </a>

  </main>

  <footer class="site-footer">
    <div class="xt-card ${cardSm()} ${cardDefault()}">
      <div class="xt-h4">Footer</div>
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
