const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-animation-absolute-cover">
    <div class="xt-slider bg-primary-500">
      <div class="xt-slides" data-xt-slider-dragger>
        <div class="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-200 w-full h-full absolute">
                <img class="xt-media object-cover" src="/img.jpg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto max-w-2xl ${classes.textInverse()} text-center">
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">1</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="*** hero-cover *** absolute inset-0 pointer-events-none bg-primary-500 translate-x-full"></div>
        </div>

        <div class="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-200 w-full h-full absolute">
                <img class="xt-media object-cover" src="/img-alt.jpg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto max-w-2xl ${classes.textInverse()} text-center">
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">2</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="*** hero-cover *** absolute inset-0 pointer-events-none bg-gray-500 translate-x-full"></div>
        </div>

        <div class="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-200 w-full h-full absolute">
                <img class="xt-media object-cover" src="/img.jpg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto max-w-2xl ${classes.textInverse()} text-center">
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">3</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="*** hero-cover *** absolute inset-0 pointer-events-none bg-primary-500 translate-x-full"></div>
        </div>

        <div class="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-200 w-full h-full absolute">
                <img class="xt-media object-cover" src="/img-alt.jpg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto max-w-2xl ${classes.textInverse()} text-center">
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">4</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="*** hero-cover *** absolute inset-0 pointer-events-none bg-gray-500 translate-x-full"></div>
        </div>

        <div class="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-200 w-full h-full absolute">
                <img class="xt-media object-cover" src="/img.jpg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto max-w-2xl ${classes.textInverse()} text-center">
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">5</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="*** hero-cover *** absolute inset-0 pointer-events-none bg-primary-500 translate-x-full"></div>
        </div>

        <div class="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-200 w-full h-full absolute">
                <img class="xt-media object-cover" src="/img-alt.jpg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto max-w-2xl ${classes.textInverse()} text-center">
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">6</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="*** hero-cover *** absolute inset-0 pointer-events-none bg-gray-500 translate-x-full"></div>
        </div>
      </div>

      <nav
        class="w-full xt-list xt-list-2 pt-4 items-center justify-center absolute z-content bottom-6"
        data-xt-slider-pagination>
        <button
          type="button"
          class="xt-button ${classes.buttonSlider()} hidden"
          data-xt-slider-element
          title="Slide xt-num"></button>
      </nav>
    </div>
  </div>
`

export const object = {
  html: html,
  overflow: true,
}
