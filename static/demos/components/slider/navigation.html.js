const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-navigation">
    <div class="xt-slider">
      <div class="xt-slides">
        <div class="xt-slides-inner xt-row xt-row-4">
          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">1</div>
              <nav class="xt-list xt-list-3 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
                  data-xt-nav="-1"
                  title="Previous slide"
                >
                  ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
                </button>
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
                  data-xt-nav="1"
                  title="Next slide"
                >
                  ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">2</div>
              <nav class="xt-list xt-list-3 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
                  data-xt-nav="-1"
                  title="Previous slide"
                >
                  ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
                </button>
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
                  data-xt-nav="1"
                  title="Next slide"
                >
                  ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">3</div>
              <nav class="xt-list xt-list-3 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
                  data-xt-nav="-1"
                  title="Previous slide"
                >
                  ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
                </button>
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
                  data-xt-nav="1"
                  title="Next slide"
                >
                  ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-7/12 sm:w-5/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">4</div>
              <nav class="xt-list xt-list-3 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
                  data-xt-nav="-1"
                  title="Previous slide"
                >
                  ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
                </button>
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
                  data-xt-nav="1"
                  title="Next slide"
                >
                  ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-7/12 sm:w-5/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">5</div>
              <nav class="xt-list xt-list-3 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
                  data-xt-nav="-1"
                  title="Previous slide"
                >
                  ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
                </button>
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
                  data-xt-nav="1"
                  title="Next slide"
                >
                  ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <nav class="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
        <button
          type="button"
          class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
          data-xt-nav="-1"
          title="Previous slide"
        >
          ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
        </button>
        <button
          type="button"
          class="xt-button text-2xs py-2 px-3.5 xt-in:px-5 w-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 xt-in:bg-gray-400 transition-all xt-ignore"
          data-xt-pag
          title="Slide xt-num"
        ></button>
        <button
          type="button"
          class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
          data-xt-nav="1"
          title="Next slide"
        >
          ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
        </button>
      </nav>
    </div>
  </div>
`

export const object = {
  html: html,
}
