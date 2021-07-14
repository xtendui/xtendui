const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--navsides-slider">
    <div class="xt-slider">
      <div class="xt-slides xt-row xt-row-4" data-xt-slider-dragger>
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

      <nav class="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
        <button
          type="button"
          class="xt-button ${classes.buttonSlider()} hidden"
          data-xt-slider-element
          title="Slide xt-num"
        ></button>
      </nav>

      <button
        type="button"
        class="*** hidden md:block cursor-none absolute top-0 left-0 w-24 h-full group ***"
        data-xt-nav="-1"
        aria-label="Previous slide"
        data-xt-mousefollow
      >
        <div
          class="*** xt-mousefollow fixed *** text-black text-2xl transition-opacity opacity-0 in:opacity-100"
          data-xt-mousefollow-target
        >
          ${classes.iconArrowLeft({
            classes: '*** transition-all duration-300 group-in:opacity-75 group-in:scale-75 ***',
          })}
        </div>
      </button>

      <button
        type="button"
        class="*** hidden md:block cursor-none absolute top-0 right-0 w-24 h-full group ***"
        data-xt-nav="1"
        aria-label="Next slide"
        data-xt-mousefollow
      >
        <div
          class="*** xt-mousefollow fixed *** text-black text-2xl transition-opacity opacity-0 in:opacity-100"
          data-xt-mousefollow-target
        >
          ${classes.iconArrowRight({
            classes: '*** transition-all duration-300 group-in:opacity-75 group-in:scale-75 ***',
          })}
        </div>
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
