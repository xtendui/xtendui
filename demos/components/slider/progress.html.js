const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-progress">
    <div class="xt-slider">
      <div class="p-4 md:p-6 lg:p-8" data-xt-mousefollow>
        <div class="xt-slides xt-row xt-row-4" data-xt-slider-dragger>
          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">1</div>
              <span class="${classes.loader()}">
                <span class="${classes.filler()} text-primary-500 h-1 top-auto">
                  <span class="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                  <span class="block absolute bg-current h-full bottom-0 left-0"></span>
                </span>
              </span>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">2</div>
              <span class="${classes.loader()}">
                <span class="${classes.filler()} text-primary-500 h-1 top-auto">
                  <span class="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                  <span class="block absolute bg-current h-full bottom-0 left-0"></span>
                </span>
              </span>
            </div>
          </div>
          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">3</div>
              <span class="${classes.loader()}">
                <span class="${classes.filler()} text-primary-500 h-1 top-auto">
                  <span class="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                  <span class="block absolute bg-current h-full bottom-0 left-0"></span>
                </span>
              </span>
            </div>
          </div>

          <div class="xt-slide w-full ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">4</div>
              <span class="${classes.loader()}">
                <span class="${classes.filler()} text-primary-500 h-1 top-auto">
                  <span class="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                  <span class="block absolute bg-current h-full bottom-0 left-0"></span>
                </span>
              </span>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">5</div>
              <span class="${classes.loader()}">
                <span class="${classes.filler()} text-primary-500 h-1 top-auto">
                  <span class="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                  <span class="block absolute bg-current h-full bottom-0 left-0"></span>
                </span>
              </span>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">6</div>
              <span class="${classes.loader()}">
                <span class="${classes.filler()} text-primary-500 h-1 top-auto">
                  <span class="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                  <span class="block absolute bg-current h-full bottom-0 left-0"></span>
                </span>
              </span>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">7</div>
              <span class="${classes.loader()}">
                <span class="${classes.filler()} text-primary-500 h-1 top-auto">
                  <span class="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                  <span class="block absolute bg-current h-full bottom-0 left-0"></span>
                </span>
              </span>
            </div>
          </div>
        </div>

        <nav class="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
          <button
            type="button"
            class="xt-button ${classes.buttonSlider()} hidden"
            data-xt-slider-element
            title="Slide xt-num"
          >
            <span class="${classes.loader()}">
              <span class="${classes.filler()} text-primary-500">
                <span class="block absolute bg-current opacity-25 w-full h-full"></span>
                <span class="block absolute bg-current w-full"></span>
              </span>
            </span>
          </button>
        </nav>

        <span class="*** xt-mousefollow fixed *** xt-loader group hover-none:hidden" data-xt-mousefollow-target>
          <span
            class="${classes.spinner()} w-6 h-6 text-primary-500 transition opacity-0 group-in:opacity-100 -mt-1 ml-4"
          >
            ${classes.svgSpinner({})}
          </span>
        </span>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  overflow: true,
}
