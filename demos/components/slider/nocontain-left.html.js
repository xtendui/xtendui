const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-nocontain-left">
    <div class="xt-slider">
      <div class="p-4 md:p-6 lg:p-8">
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

        <nav class="w-full xt-list xt-list-3 pt-4 items-center justify-center" data-xt-slider-pagination>
          <button
            type="button"
            class="xt-button text-2xs py-2 px-3.5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-5 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
            data-xt-slider-element
            title="Slide xt-num"
          ></button>
        </nav>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  overflow: true,
}
