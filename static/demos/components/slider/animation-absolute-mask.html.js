const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-animation-absolute-mask">
    <div class="xt-slider bg-primary-500">
      <div class="xt-slides" data-xt-slider-dragger>
        <div class="xt-slide *** xt-slide-absolute *** w-full" data-xt-slider-target>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-500 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center"
                >
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">1</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="xt-slide *** xt-slide-absolute *** w-full" data-xt-slider-target>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-500 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center"
                >
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">2</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="xt-slide *** xt-slide-absolute *** w-full" data-xt-slider-target>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-500 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center"
                >
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">3</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="xt-slide *** xt-slide-absolute *** w-full" data-xt-slider-target>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-500 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center"
                >
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">4</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        class="w-full xt-list xt-list-3 pt-4 items-center justify-center absolute z-slide bottom-6"
        data-xt-slider-pagination
      >
        <button
          type="button"
          class="xt-button ${classes.buttonSlider()} hidden"
          data-xt-slider-element
          title="Slide xt-num"
        ></button>
      </nav>
    </div>
  </div>
`

export const object = {
  html: html,
  overflow: true,
}
