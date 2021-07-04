const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-hero-v1">
    <div class="xt-slider xt-slider-absolute bg-primary-500">
      <div class="xt-slides" data-xt-slider-dragger>
        <div class="xt-slide w-full" data-xt-slider-slide>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-500 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
              </div>
              <div class="*** hero-content *** flex relative min-h-screen">
                <a
                  href="/"
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center"
                >
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">1. Lorem ipsum</h2>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="xt-slide w-full" data-xt-slider-slide>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-500 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
              <div class="*** hero-content *** flex relative min-h-screen">
                <a
                  href="/"
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left"
                >
                  <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">2. Dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                    turpis.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="xt-slide w-full" data-xt-slider-slide>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-500 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
              </div>
              <div class="*** hero-content *** flex relative min-h-screen">
                <a
                  href="/"
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left"
                >
                  <h2 class="xt-h1">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="xt-slide w-full" data-xt-slider-slide>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-500 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
              <div class="*** hero-content *** flex relative min-h-screen">
                <div
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left"
                >
                  <h2 class="xt-h1">4. Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                    turpis.
                  </p>
                  <a
                    href="/"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                  >
                    Lorem ipsum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="xt-slide w-full" data-xt-slider-slide>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-500 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
              </div>
              <div class="*** hero-content *** flex relative min-h-screen">
                <div
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left"
                >
                  <h2 class="xt-h1">5. Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                    turpis.
                  </p>
                  <a
                    href="/"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                  >
                    Lorem ipsum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="xt-slide w-full" data-xt-slider-slide>
          <div class="hero relative overflow-hidden bg-black">
            <div class="*** hero-inner ***">
              <div class="xt-media-container bg-gray-500 w-full h-full absolute">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
              <div class="*** hero-content *** flex relative min-h-screen">
                <div
                  class="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:mr-0 max-w-2xl text-white xt-links-inverse text-center md:text-right"
                >
                  <h2 class="xt-h1">6. Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                    turpis.
                  </p>
                  <a
                    href="/"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                  >
                    Lorem ipsum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="hidden md:block cursor-none absolute z-above top-0 left-0 w-24 h-full group"
        data-xt-nav="-1"
        aria-label="Previous slide"
        data-xt-mousefollow
      >
        <div
          class="*** xt-mousefollow fixed *** text-white text-4xl transition-opacity opacity-0 in:opacity-100"
          data-xt-mousefollow-tr
        >
          ${classes.iconArrowLeft({
            classes: 'transform transition-all duration-300 group-in:opacity-75 group-in:scale-75',
          })}
        </div>
      </button>

      <button
        type="button"
        class="hidden md:block cursor-none absolute z-above top-0 right-0 w-24 h-full group"
        data-xt-nav="1"
        aria-label="Next slide"
        data-xt-mousefollow
      >
        <div
          class="*** xt-mousefollow fixed *** text-white text-4xl transition-opacity opacity-0 in:opacity-100"
          data-xt-mousefollow-tr
        >
          ${classes.iconArrowRight({
            classes: 'transform transition-all duration-300 group-in:opacity-75 group-in:scale-75',
          })}
        </div>
      </button>

      <nav class="hidden" data-xt-slider-pagination>
        <button type="button" class="xt-button hidden" data-xt-pag></button>
      </nav>
    </div>
  </div>
`

export const object = {
  html: html,
}
