const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--products-listing-v1">
    <div class="py-10">
      <div class="xt-slider pb-10" data-xt-slider="{ align: 'left', loop: true }">
        <div class="container">
          <div class="xt-h3 mb-8">
            <div class="xt-list xt-list-2 items-center">
              <div class="mr-auto">Latest Products</div>

              <button
                type="button"
                class="xt-button ${classes.buttonSm()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
                data-xt-nav="-1"
                aria-label="Previous slide"
              >
                ${classes.iconArrowLeft({
                  classes: 'xt-icon w-auto h-4',
                })}
              </button>

              <button
                type="button"
                class="xt-button ${classes.buttonSm()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
                data-xt-nav="1"
                aria-label="Next slide"
              >
                ${classes.iconArrowRight({
                  classes: 'xt-icon w-auto h-4',
                })}
              </button>
            </div>
          </div>

          <div
            class="xt-slides transition-all ease-out-expo duration-300 in:ease-out-quint in:duration-1000 xt-row xt-row-4"
            data-xt-slider-dragger
          >
            <div class="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  <div class="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                    <div class="xt-list xt-list-3 items-center flex-nowrap">
                      <div class="text-xl font-semibold">-35%</div>
                      <div class="max-w-xs text-xs leading-tight uppercase opacity-50">For Exhibition<br />Renewal</div>
                    </div>
                  </div>
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                    <div class="xt-list xt-list-3 items-center flex-nowrap">
                      <div class="text-xl font-semibold">-40%</div>
                      <div class="max-w-xs text-xs leading-tight uppercase opacity-50">Black<br />Friday</div>
                    </div>
                  </div>
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>
          </div>

          <nav class="hidden" data-xt-slider-pagination>
            <button type="button" class="xt-button hidden" data-xt-slider-element></button>
          </nav>
        </div>
      </div>

      <div class="listing">
        <div class="container">
          <div class="xt-h2 mb-8">Category</div>

          <div class="xt-row xt-row-6">
            <div class="w-6/12 md:w-4/12">
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  <div class="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                    <div class="xt-list xt-list-3 items-center flex-nowrap">
                      <div class="text-xl font-semibold">-35%</div>
                      <div class="max-w-xs text-xs leading-tight uppercase opacity-50">For Exhibition<br />Renewal</div>
                    </div>
                  </div>
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  <div class="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                    <div class="xt-list xt-list-3 items-center flex-nowrap">
                      <div class="text-xl font-semibold">-40%</div>
                      <div class="max-w-xs text-xs leading-tight uppercase opacity-50">Black<br />Friday</div>
                    </div>
                  </div>
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Lorem Ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="*** listing-item *** block">
                <div class="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                  <img class="*** xt-media *** object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div class="*** listing-item *** -content py-4">
                  <div class="xt-h5">Dolor sit amet</div>
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
