const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-exclude">
    <div class="*** xt-list *** xt-list-3 items-center p-4 pb-0 md:p-6 md:pb-0 lg:p-8 lg:pb-0">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
        data-xt-toggle-element
        data-xt-group="group0">
        Group0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()} *** on ***"
        data-xt-toggle-element
        data-xt-group="group1">
        Group1
      </button>
    </div>

    <section class="xt-slider" aria-label="Example" data-xt-slider="{ exclude: '.hidden' }">
      <div class="p-4 md:p-6 lg:p-8">
        <div
          class="xt-slides transition ease-out-expo duration-300 on:duration-500 xt-row xt-row-4"
          data-xt-slider-dragger>
          <div
            class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()} *** hidden ***"
            data-xt-slide-not-show-before-init
            data-xt-slider-target>
            <div class="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group1">
              <div
                class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
                <div class="xt-h4">1</div>
              </div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()} *** hidden ***" data-xt-slider-target>
            <div class="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group0,group1">
              <div
                class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
                <div class="xt-h4">2</div>
              </div>
            </div>
          </div>

          <div
            class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}"
            data-xt-slide-show-before-init
            data-xt-slider-target>
            <div class="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group0">
              <div
                class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
                <div class="xt-h4">3</div>
              </div>
            </div>
          </div>

          <div class="xt-slide w-full ${classes.slide()} *** hidden ***" data-xt-slider-target>
            <div class="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group1">
              <div
                class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
                <div class="xt-h4">4</div>
              </div>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()} *** hidden ***" data-xt-slider-target>
            <div class="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group0">
              <div
                class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
                <div class="xt-h4">5</div>
              </div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div class="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group0,group1">
              <div
                class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
                <div class="xt-h4">6</div>
              </div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()} *** hidden ***" data-xt-slider-target>
            <div class="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group1">
              <div
                class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
                <div class="xt-h4">7</div>
              </div>
            </div>
          </div>
        </div>

        <nav
          aria-label="Slider Navigation"
          class="w-full xt-list xt-list-2 pt-4 items-center justify-center"
          data-xt-slider-pagination>
          <button
            type="button"
            class="xt-button ${classes.buttonSlider()} hidden"
            data-xt-slider-element
            aria-label="Slide xt-num"></button>
        </nav>
      </div>
    </section>
  </div>
`

export const object = {
  html: html,
  overflow: true,
}
