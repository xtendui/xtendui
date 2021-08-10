const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-navsides">
    <div class="xt-slider" data-xt-slider="{ loop: true }">
      <div class="*** slider-navs-container inline-block w-full relative ***">
        <div
          class="xt-slides transition-all ease-out-expo duration-300 in:ease-out-quint in:duration-1000 xt-row xt-row-4"
          data-xt-slider-dragger
        >
          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">1</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">2</div>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">3</div>
            </div>
          </div>

          <div class="xt-slide w-full ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">4</div>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">5</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">6</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">7</div>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="*** absolute z-content top-0 left-0 h-full px-2 md:px-6 group transition duration-300 ***"
          data-xt-nav="-1"
          aria-label="Previous slide"
        >
          <div
            class="xt-button w-8 h-8 md:w-10 md:h-10 text-lg md:text-xl rounded-full ${classes.buttonPrimaryGroup()} group-hover:scale-125"
          >
            ${classes.iconArrowLeft({})}
          </div>
        </button>

        <button
          type="button"
          class="*** absolute z-content top-0 right-0 h-full px-2 md:px-6 group transition duration-300 ***"
          data-xt-nav="1"
          aria-label="Next slide"
        >
          <div
            class="xt-button w-8 h-8 md:w-10 md:h-10 text-lg md:text-xl rounded-full ${classes.buttonPrimaryGroup()} group-hover:scale-125"
          >
            ${classes.iconArrowRight({})}
          </div>
        </button>
      </div>

      <nav class="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
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
}
