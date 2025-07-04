const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-navigation">
    <section class="xt-slider" aria-label="Example" data-xt-slider="{ loop: true }">
      <div class="p-4 md:p-6 lg:p-8">
        <div
          class="xt-slides transition ease-out-expo duration-300 on:duration-500 xt-row xt-row-4"
          data-xt-slider-dragger>
          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4">1</div>
              <nav aria-label="Slider Navigation" class="xt-list xt-list-3 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="-1"
                  aria-label="Previous slide">
                  ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
                </button>
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="1"
                  aria-label="Next slide">
                  ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4">2</div>
              <nav aria-label="Slider Navigation" class="xt-list xt-list-3 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="-1"
                  aria-label="Previous slide">
                  ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
                </button>
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="1"
                  aria-label="Next slide">
                  ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4">3</div>
              <nav aria-label="Slider Navigation" class="xt-list xt-list-3 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="-1"
                  aria-label="Previous slide">
                  ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
                </button>
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="1"
                  aria-label="Next slide">
                  ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-full ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4">4</div>
              <nav aria-label="Slider Navigation" class="xt-list xt-list-3 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="-1"
                  aria-label="Previous slide">
                  ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
                </button>
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="1"
                  aria-label="Next slide">
                  ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4">5</div>
              <nav aria-label="Slider Navigation" class="xt-list xt-list-3 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="-1"
                  aria-label="Previous slide">
                  ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
                </button>
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="1"
                  aria-label="Next slide">
                  ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4">6</div>
              <nav aria-label="Slider Navigation" class="xt-list xt-list-3 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="-1"
                  aria-label="Previous slide">
                  ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
                </button>
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="1"
                  aria-label="Next slide">
                  ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4">7</div>
              <nav aria-label="Slider Navigation" class="xt-list xt-list-3 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="-1"
                  aria-label="Previous slide">
                  ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
                </button>
                <button
                  type="button"
                  class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  data-xt-nav="1"
                  aria-label="Next slide">
                  ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
                </button>
              </nav>
            </div>
          </div>
        </div>

        <nav
          aria-label="Slider Navigation"
          class="w-full xt-list xt-list-2 pt-4 items-center justify-center"
          data-xt-slider-pagination>
          <button
            type="button"
            class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            data-xt-nav="-1"
            aria-label="Previous slide">
            ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
          </button>
          <button
            type="button"
            class="xt-button ${classes.buttonSlider()} hidden"
            data-xt-slider-element
            aria-label="Slide xt-num"></button>
          <button
            type="button"
            class="xt-button text-12 py-2 px-2 w-7 h-7 rounded-full ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            data-xt-nav="1"
            aria-label="Next slide">
            ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
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
