const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--products-listing-v2">
    <div class="py-10">
      <div class="xt-slider pb-10" data-xt-slider="{ align: 'left', wrap: true }">
        <div class="container">
          <div class="xt-h3 mb-8">Latest Products</div>

          <div
            class="xt-slides transition ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
            data-xt-slider-dragger>
            <div class="xt-slide w-6/12 md:w-4/12 lg:w-3/12 ${classes.slide()}" data-xt-slider-target>
              <div class="*** transition opacity-0 group-in:opacity-100 ***">
                <a href="/" class="*** listing-item *** block group">
                  <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img class="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                    <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    <div class="absolute top-0 left-0 m-4 py-2 px-3 bg-white bg-opacity-90">
                      <div class="xt-list xt-list-3 items-center flex-nowrap">
                        <div class="font-medium text-sm">-35%</div>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                    <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12 lg:w-3/12 ${classes.slide()}" data-xt-slider-target>
              <div class="*** transition opacity-0 group-in:opacity-100 ***">
                <a href="/" class="*** listing-item *** block group">
                  <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img class="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                    <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    <div class="absolute top-0 left-0 m-4 py-2 px-3 bg-white bg-opacity-90">
                      <div class="xt-list xt-list-3 items-center flex-nowrap">
                        <div class="font-medium text-sm">-40%</div>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                    <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12 lg:w-3/12 ${classes.slide()}" data-xt-slider-target>
              <div class="*** transition opacity-0 group-in:opacity-100 ***">
                <a href="/" class="*** listing-item *** block group">
                  <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img class="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                    <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div class="py-4">
                    <div class="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                    <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12 lg:w-3/12 ${classes.slide()}" data-xt-slider-target>
              <div class="*** transition opacity-0 group-in:opacity-100 ***">
                <a href="/" class="*** listing-item *** block group">
                  <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img class="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                    <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div class="py-4">
                    <div class="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                    <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12 lg:w-3/12 ${classes.slide()}" data-xt-slider-target>
              <div class="*** transition opacity-0 group-in:opacity-100 ***">
                <a href="/" class="*** listing-item *** block group">
                  <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img class="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                    <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div class="py-4">
                    <div class="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                    <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12 lg:w-3/12 ${classes.slide()}" data-xt-slider-target>
              <div class="*** transition opacity-0 group-in:opacity-100 ***">
                <a href="/" class="*** listing-item *** block group">
                  <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img class="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                    <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div class="py-4">
                    <div class="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                    <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12 lg:w-3/12 ${classes.slide()}" data-xt-slider-target>
              <div class="*** transition opacity-0 group-in:opacity-100 ***">
                <a href="/" class="*** listing-item *** block group">
                  <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img class="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                    <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div class="py-4">
                    <div class="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                    <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12 lg:w-3/12 ${classes.slide()}" data-xt-slider-target>
              <div class="*** transition opacity-0 group-in:opacity-100 ***">
                <a href="/" class="*** listing-item *** block group">
                  <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img class="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                    <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div class="py-4">
                    <div class="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                    <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="absolute z-content top-0 left-0 h-full px-2 md:px-6 group transition duration-300"
            data-xt-nav="-1"
            aria-label="Previous slide">
            <div
              class="xt-button w-8 h-8 md:w-10 md:h-10 text-lg md:text-xl rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()} ${classes.buttonGrayAnimGroup()} group-hover:scale-125">
              ${classes.iconArrowLeft()}
            </div>
          </button>

          <button
            type="button"
            class="absolute z-content top-0 right-0 h-full px-2 md:px-6 group transition duration-300"
            data-xt-nav="1"
            aria-label="Next slide">
            <div
              class="xt-button w-8 h-8 md:w-10 md:h-10 text-lg md:text-xl rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()} ${classes.buttonGrayAnimGroup()} group-hover:scale-125">
              ${classes.iconArrowRight()}
            </div>
          </button>

          <nav aria-label="Slider Navigation" class="hidden" data-xt-slider-pagination>
            <button type="button" class="xt-button hidden" data-xt-slider-element></button>
          </nav>
        </div>
      </div>

      <div class="listing">
        <div class="container">
          <div class="xt-h2 mb-8">Category</div>

          <div class="xt-row xt-row-4">
            <div class="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="/" class="*** listing-item *** block group">
                <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                  <img class="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                  <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  <div class="absolute top-0 left-0 m-4 py-2 px-3 bg-white bg-opacity-90">
                    <div class="xt-list xt-list-3 items-center flex-nowrap">
                      <div class="font-medium text-sm">-35%</div>
                    </div>
                  </div>
                </div>
                <div class="py-4">
                  <div class="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="/" class="*** listing-item *** block group">
                <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                  <img class="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  <div class="absolute top-0 left-0 m-4 py-2 px-3 bg-white bg-opacity-90">
                    <div class="xt-list xt-list-3 items-center flex-nowrap">
                      <div class="font-medium text-sm">-40%</div>
                    </div>
                  </div>
                </div>
                <div class="py-4">
                  <div class="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="/" class="*** listing-item *** block group">
                <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                  <img class="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                  <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="/" class="*** listing-item *** block group">
                <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                  <img class="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="/" class="*** listing-item *** block group">
                <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                  <img class="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                  <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="/" class="*** listing-item *** block group">
                <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                  <img class="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="/" class="*** listing-item *** block group">
                <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                  <img class="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                  <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="/" class="*** listing-item *** block group">
                <div class="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                  <img class="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
