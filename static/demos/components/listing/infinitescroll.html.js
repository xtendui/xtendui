const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--infinitescroll">
    <div
      class="py-10"
      data-xt-infinitescroll="{
      get: false,
      max: 4,
      elements: {
        itemsContainer: '.xt-row',
        item: ':scope > *',
        scrollUp: '[data-xt-infinitescroll-up]',
        scrollDown: '[data-xt-infinitescroll-down]',
        spaceAdditional: '[data-xt-infinitescroll-up]',
        pagination: '.infinitescroll-pagination',
      },
    }"
    >
      <div class="container">
        <h1>Category Page</h1>

        <div class="mb-4">
          <div class="xt-list xt-list-2 flex-col items-center">
            <button
              type="button"
              class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"
              data-xt-infinitescroll-up="-1"
            >
              <span class="content"> Load previous page </span>

              <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden infinitescroll-spinner">
                <span class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-white">
                  ${classes.spinner({ classes: 'animate-xt-spinner' })}
                </span>
              </span>
            </button>
          </div>
        </div>

        <div class="xt-row xt-row-6">
          <div class="w-6/12 md:w-4/12">
            <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
              <div class="xt-media-container bg-gray-600 xt-ratio-75">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div class="py-4">
                <div class="xt-h5">Lorem ipsum</div>
                <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
              </div>
            </a>
          </div>

          <div class="w-6/12 md:w-4/12">
            <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
              <div class="xt-media-container bg-gray-600 xt-ratio-75">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div class="py-4">
                <div class="xt-h5">Dolor sit amet</div>
                <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
              </div>
            </a>
          </div>

          <div class="w-6/12 md:w-4/12">
            <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
              <div class="xt-media-container bg-gray-600 xt-ratio-75">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div class="py-4">
                <div class="xt-h5">Lorem ipsum</div>
                <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
              </div>
            </a>
          </div>

          <div class="w-6/12 md:w-4/12">
            <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
              <div class="xt-media-container bg-gray-600 xt-ratio-75">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div class="py-4">
                <div class="xt-h5">Dolor sit amet</div>
                <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
              </div>
            </a>
          </div>

          <div class="w-6/12 md:w-4/12">
            <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
              <div class="xt-media-container bg-gray-600 xt-ratio-75">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div class="py-4">
                <div class="xt-h5">Lorem Ipsum</div>
                <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
              </div>
            </a>
          </div>

          <div class="w-6/12 md:w-4/12">
            <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
              <div class="xt-media-container bg-gray-600 xt-ratio-75">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div class="py-4">
                <div class="xt-h5">Dolor sit amet</div>
                <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
              </div>
            </a>
          </div>

          <div class="w-6/12">
            <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
              <div class="xt-media-container bg-gray-600 xt-ratio-75 md:xt-ratio-50">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div class="py-4">
                <div class="xt-h5">Lorem Ipsum</div>
                <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
              </div>
            </a>
          </div>

          <div class="w-6/12">
            <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
              <div class="xt-media-container bg-gray-600 xt-ratio-75 md:xt-ratio-50">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div class="py-4">
                <div class="xt-h5">Dolor sit amet</div>
                <div class="-mt-2 text-sm font-semibold">3.772,00 €</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <div class="xt-list xt-list-2 flex-col items-center">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"
            data-xt-infinitescroll-down="+1"
          >
            <span class="content"> Show more products </span>

            <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden infinitescroll-spinner">
              <span class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-white">
                ${classes.spinner({ classes: 'animate-xt-spinner' })}
              </span>
            </span>
          </button>

          <div class="infinitescroll-pagination h6">Page xt-num of xt-tot</div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
