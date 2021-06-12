const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--infinitescroll">
    <div class="*** infinitescroll *** py-10">
      <div class="container">
        <h1>Category Page</h1>

        <!-- switcher for demo purpose remove this -->
        <form class="text-sm mb-4">
          <label class="${classes.checkLabel()}">
            <input
              type="checkbox"
              class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkDefault()}"
              checked
            />
            <span class="${classes.checkContent()}">Activate on scroll</span>
          </label>
        </form>

        <div class="mb-4">
          <div class="xt-list xt-list-2 flex-col items-center">
            <button
              type="button"
              class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
              data-xt-infinitescroll-up="-1"
            >
              <span class="content"> Load previous page </span>

              <span class="${classes.loader()} *** infinitescroll-spinner ***">
                <span class="${classes.spinner()} w-6 h-6 text-white">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </span>
              </span>
            </button>
          </div>
        </div>

        <div class="xt-row xt-row-6">
          <div class="w-6/12 md:w-4/12">
            <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
              <div class="xt-media-container bg-gray-600 xt-ratio-75">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
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
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
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
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
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
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
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
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
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
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
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
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
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
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
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
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-infinitescroll-down="+1"
          >
            <span class="content"> Show more products </span>

            <span class="${classes.loader()} *** infinitescroll-spinner ***">
              <span class="${classes.spinner()} w-6 h-6 text-white">
                ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
              </span>
            </span>
          </button>

          <div class="h6" data-xt-infinitescroll-pagination>Page xt-num of xt-tot</div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
