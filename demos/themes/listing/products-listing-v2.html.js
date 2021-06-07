const html = /* HTML */ `
  <div class="demo--products-listing-v2">
    <div class="py-10">
      <div class="xt-slider ** slider--listing ** pb-10">
        <div class="container">
          <div class="xt-h2 mb-8">Latest Products</div>
          <div class="xt-slides xt-row xt-row-4">
            <div class="xt-slide w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  <div class="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                    <div class="xt-list xt-list-3 items-center flex-nowrap">
                      <div class="text-lg font-semibold">-35%</div>
                    </div>
                  </div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  <div class="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                    <div class="xt-list xt-list-3 items-center flex-nowrap">
                      <div class="text-lg font-semibold">-40%</div>
                    </div>
                  </div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>
          </div>

          <nav class="xt-slider-pagination hidden">
            <button type="button" class="xt-button hidden" data-xt-pag></button>
          </nav>
        </div>
      </div>

      <div class="listing">
        <div class="container">
          <div class="xt-h2 mb-8">Category</div>

          <div class="xt-row xt-row-6">
            <div class="w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  <div class="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                    <div class="xt-list xt-list-3 items-center flex-nowrap">
                      <div class="text-lg font-semibold">-35%</div>
                    </div>
                  </div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  <div class="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                    <div class="xt-list xt-list-3 items-center flex-nowrap">
                      <div class="text-lg font-semibold">-40%</div>
                    </div>
                  </div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="** listing-item ** block group">
                <div class="** xt-media-container ** bg-gray-600 xt-ratio-125 overflow-hidden">
                  <img class="** xt-media ** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="** xt-media-mask ** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                </div>
                <div class="py-4">
                  <div class="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
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
