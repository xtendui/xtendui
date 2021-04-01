const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--navsides-slider">
    <div class="xt-slider">
      <div class="xt-slides">
        <div class="xt-slides-inner xt-row xt-row-4">
          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">1</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">2</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">3</div>
            </div>
          </div>

          <div class="xt-slide w-7/12 sm:w-6/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">4</div>
            </div>
          </div>

          <div class="xt-slide w-7/12 sm:w-6/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">5</div>
            </div>
          </div>
        </div>
      </div>

      <nav class="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
        <button
          type="button"
          class="xt-button text-2xs py-2 px-3.5 active:px-5 w-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all xt-ignore"
          data-xt-pag
          title="Slide xt-num"
        ></button>
      </nav>
      <button
        type="button"
        class="hidden md:block cursor-none z-above absolute top-0 left-0 w-24 h-full group"
        data-xt-nav="-1"
        aria-label="Previous slide"
        data-xt-mousefollow
      >
        <div class="xt-mousefollow text-black text-2xl transition-opacity opacity-0 active:opacity-100">
          ${classes.iconArrowLeft({
            classes: 'transform transition-all group-active:opacity-75 group-active:scale-75',
          })}
        </div>
      </button>

      <button
        type="button"
        class="hidden md:block cursor-none z-above absolute top-0 right-0 w-24 h-full group"
        data-xt-nav="1"
        aria-label="Next slide"
        data-xt-mousefollow
      >
        <div class="xt-mousefollow text-black text-2xl transition-opacity opacity-0 active:opacity-100">
          ${classes.iconArrowRight({
            classes: 'transform transition-all group-active:opacity-75 group-active:scale-75',
          })}
        </div>
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
