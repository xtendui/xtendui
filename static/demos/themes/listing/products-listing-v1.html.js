const html = `
  <div id="ref--">
    <div class="py-10">
      <div class="xt-slider slider--listing" data-xt-slider="{ contain: true, jumpOverflow: true }">
        <div class="xt-slides">
          <div class="container">
            <div class="xt-h2 mb-8">Latest Products</div>

            <div class="xt-slides-inner xt-row xt-row-4">
              <div class="xt-slide w-6/12 md:w-4/12">
                <a href="#" class="listing-item block">
                  <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                    <div class="xt-media-inner">
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    </div>
                    <div class="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                      <div class="xt-list xt-list-3 items-center flex-nowrap">
                        <div class="text-xl font-semibold">-35%</div>
                        <div class="max-w-xs text-xs leading-tight uppercase opacity-50">
                          For Exhibition<br />Renewal
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="listing-item-content py-4">
                    <div class="xt-h5">Lorem ipsum</div>
                    <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div class="xt-slide w-6/12 md:w-4/12">
                <a href="#" class="listing-item block">
                  <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                    <div class="xt-media-inner">
                      <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    </div>
                    <div class="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                      <div class="xt-list xt-list-3 items-center flex-nowrap">
                        <div class="text-xl font-semibold">-40%</div>
                        <div class="max-w-xs text-xs leading-tight uppercase opacity-50">Black<br />Friday</div>
                      </div>
                    </div>
                  </div>
                  <div class="listing-item-content py-4">
                    <div class="xt-h5">Dolor sit amet</div>
                    <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div class="xt-slide w-6/12 md:w-4/12">
                <a href="#" class="listing-item block">
                  <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                    <div class="xt-media-inner">
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div class="listing-item-content py-4">
                    <div class="xt-h5">Lorem ipsum</div>
                    <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div class="xt-slide w-6/12 md:w-4/12">
                <a href="#" class="listing-item block">
                  <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                    <div class="xt-media-inner">
                      <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div class="listing-item-content py-4">
                    <div class="xt-h5">Dolor sit amet</div>
                    <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div class="xt-slide w-6/12 md:w-4/12">
                <a href="#" class="listing-item block">
                  <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                    <div class="xt-media-inner">
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div class="listing-item-content py-4">
                    <div class="xt-h5">Lorem ipsum</div>
                    <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div class="xt-slide w-6/12 md:w-4/12">
                <a href="#" class="listing-item block">
                  <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                    <div class="xt-media-inner">
                      <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div class="listing-item-content py-4">
                    <div class="xt-h5">Dolor sit amet</div>
                    <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div class="xt-slide w-6/12 md:w-4/12">
                <a href="#" class="listing-item block">
                  <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                    <div class="xt-media-inner">
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div class="listing-item-content py-4">
                    <div class="xt-h5">Lorem ipsum</div>
                    <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div class="xt-slide w-6/12 md:w-4/12">
                <a href="#" class="listing-item block">
                  <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                    <div class="xt-media-inner">
                      <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div class="listing-item-content py-4">
                    <div class="xt-h5">Dolor sit amet</div>
                    <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>

            <nav class="xt-slider-pagination">
              <button
                type="button"
                class="xt-button button-default xt-ignore"
                data-xt-pag
                title="Slide xt-num"
              ></button>
            </nav>
          </div>
        </div>
      </div>

      <div class="listing">
        <div class="container">
          <div class="xt-h2 mb-8">Category</div>

          <div class="xt-row xt-row-6">
            <div class="w-6/12 md:w-4/12">
              <a href="#" class="listing-item block">
                <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div class="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                    <div class="xt-list xt-list-3 items-center flex-nowrap">
                      <div class="text-xl font-semibold">-35%</div>
                      <div class="max-w-xs text-xs leading-tight uppercase opacity-50">For Exhibition<br />Renewal</div>
                    </div>
                  </div>
                </div>
                <div class="listing-item-content py-4">
                  <div class="xt-h5">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="listing-item block">
                <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                  <div class="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                    <div class="xt-list xt-list-3 items-center flex-nowrap">
                      <div class="text-xl font-semibold">-40%</div>
                      <div class="max-w-xs text-xs leading-tight uppercase opacity-50">Black<br />Friday</div>
                    </div>
                  </div>
                </div>
                <div class="listing-item-content py-4">
                  <div class="xt-h5">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="listing-item block">
                <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                </div>
                <div class="listing-item-content py-4">
                  <div class="xt-h5">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="listing-item block">
                <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                </div>
                <div class="listing-item-content py-4">
                  <div class="xt-h5">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="listing-item block">
                <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                </div>
                <div class="listing-item-content py-4">
                  <div class="xt-h5">Lorem Ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="listing-item block">
                <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                </div>
                <div class="listing-item-content py-4">
                  <div class="xt-h5">Dolor sit amet</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="listing-item block">
                <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                </div>
                <div class="listing-item-content py-4">
                  <div class="xt-h5">Lorem ipsum</div>
                  <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div class="w-6/12 md:w-4/12">
              <a href="#" class="listing-item block">
                <div class="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                </div>
                <div class="listing-item-content py-4">
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
