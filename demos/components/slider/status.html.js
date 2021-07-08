const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-status">
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

        <div class="slider-status mt-6 mx-auto px-6 max-w-4xl">
          <div class="relative">
            <div
              class="slider-status-current absolute left-0 top-0 h-0 border-t border-b border-black bg-black transition-all ease-in-out"
            ></div>
            <div class="slider-status-container h-0 w-full border-t border-b border-black border-opacity-5"></div>
          </div>
        </div>

        <nav class="hidden" data-xt-slider-pagination>
          <button type="button" class="xt-button hidden" data-xt-slider-element></button>
        </nav>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  overflow: true,
}
