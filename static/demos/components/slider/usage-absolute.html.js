const html = /* HTML */ `
  <div class="demo--slider-usage-absolute">
    <div class="*** xt-slider xt-slider-absolute *** bg-primary-500">
      <div class="*** xt-slides ***">
        <div class="*** xt-slide *** w-full">
          <div class="hero relative overflow-hidden bg-black">
            <div class="hero-inner">
              <div class="xt-media-container bg-gray-600 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto *** max-w-2xl *** text-white xt-links-inverse text-center"
                >
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">1</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="*** xt-slide *** w-full">
          <div class="hero relative overflow-hidden bg-black">
            <div class="hero-inner">
              <div class="xt-media-container bg-gray-600 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto *** max-w-2xl *** text-white xt-links-inverse text-center"
                >
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">2</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="*** xt-slide *** w-full">
          <div class="hero relative overflow-hidden bg-black">
            <div class="hero-inner">
              <div class="xt-media-container bg-gray-600 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
              <div class="flex relative h-96">
                <div
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto *** max-w-2xl *** text-white xt-links-inverse text-center"
                >
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">3</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        class="*** xt-slider-pagination *** w-full xt-list xt-list-3 pt-4 items-center justify-center absolute z-slide bottom-6"
      >
        <button
          type="button"
          class="xt-button text-2xs py-2 px-3.5 w-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:px-5 on:bg-gray-400 transition-all hidden"
          data-xt-pag
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
