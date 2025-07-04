const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-media-loaded">
    <section class="xt-slider" aria-label="Example" data-xt-slider="{ mediaLoaded: true, mediaLoadedReinit: true }">
      <div class="p-4 md:p-6 lg:p-8">
        <div
          class="xt-slides transition ease-out-expo duration-300 on:duration-500 xt-row xt-row-4"
          data-xt-slider-dragger>
          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 rounded-md overflow-hidden">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="/img.jpg"
                loading="lazy"
                alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="/img.jpg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 rounded-md overflow-hidden">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="/img-ratio.jpg"
                loading="lazy"
                alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="/img-ratio.jpg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 rounded-md overflow-hidden">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="/stock/ruJm3dBXCqw.jpg"
                loading="lazy"
                alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="/stock/ruJm3dBXCqw.jpg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 rounded-md overflow-hidden">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="/stock/wQLAGv4_OYs.jpg"
                loading="lazy"
                alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="/stock/wQLAGv4_OYs.jpg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 rounded-md overflow-hidden">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="/stock/OlTjeydUpQw.jpg"
                loading="lazy"
                alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="/stock/OlTjeydUpQw.jpg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 rounded-md overflow-hidden">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="/stock/Tyg0rVhOTrE.jpg"
                loading="lazy"
                alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="/stock/Tyg0rVhOTrE.jpg" loading="eager" alt="" />
            </div>
          </div>
        </div>

        <nav
          aria-label="Slider Navigation"
          class="w-full xt-list xt-list-2 pt-4 items-center justify-center"
          data-xt-slider-pagination>
          <button
            type="button"
            class="xt-button h-10 rounded-md overflow-hidden hidden"
            data-xt-slider-element
            aria-label="Slide xt-num">
            xt-content
          </button>
        </nav>
      </div>
    </section>
  </div>
`

export const object = {
  html: html,
  overflow: true,
}
