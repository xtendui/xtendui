const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div div class="demo--slider-pagination">
    <div class="xt-slider">
      <div class="p-4 md:p-6 lg:p-8">
        <div class="xt-slides xt-row xt-row-4">
          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}">
            <div class="xt-card ${classes.cardRadius()} ${classes.cardSlide()}">
              <div class="xt-h4 xt-slide-content">1</div>
              <nav class="xt-slider-pagination w-full xt-list xt-list-1 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:bg-gray-400 transition-all hidden"
                  data-xt-pag
                  title="Slide xt-num"
                >
                  xt-content
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}">
            <div class="xt-card ${classes.cardRadius()} ${classes.cardSlide()}">
              <div class="xt-h4 xt-slide-content">2</div>
              <nav class="xt-slider-pagination w-full xt-list xt-list-1 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:bg-gray-400 transition-all hidden"
                  data-xt-pag
                  title="Slide xt-num"
                >
                  xt-content
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}">
            <div class="xt-card ${classes.cardRadius()} ${classes.cardSlide()}">
              <div class="xt-h4 xt-slide-content">3</div>
              <nav class="xt-slider-pagination w-full xt-list xt-list-1 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:bg-gray-400 transition-all hidden"
                  data-xt-pag
                  title="Slide xt-num"
                >
                  xt-content
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-full ${classes.slide()}">
            <div class="xt-card ${classes.cardRadius()} ${classes.cardSlide()}">
              <div class="xt-h4 xt-slide-content">4</div>
              <nav class="xt-slider-pagination w-full xt-list xt-list-1 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:bg-gray-400 transition-all hidden"
                  data-xt-pag
                  title="Slide xt-num"
                >
                  xt-content
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}">
            <div class="xt-card ${classes.cardRadius()} ${classes.cardSlide()}">
              <div class="xt-h4 xt-slide-content">5</div>
              <nav class="xt-slider-pagination w-full xt-list xt-list-1 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:bg-gray-400 transition-all hidden"
                  data-xt-pag
                  title="Slide xt-num"
                >
                  xt-content
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}">
            <div class="xt-card ${classes.cardRadius()} ${classes.cardSlide()}">
              <div class="xt-h4 xt-slide-content">6</div>
              <nav class="xt-slider-pagination w-full xt-list xt-list-1 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:bg-gray-400 transition-all hidden"
                  data-xt-pag
                  title="Slide xt-num"
                >
                  xt-content
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}">
            <div class="xt-card ${classes.cardRadius()} ${classes.cardSlide()}">
              <div class="xt-h4 xt-slide-content">7</div>
              <nav class="xt-slider-pagination w-full xt-list xt-list-1 pt-4 items-center justify-center">
                <button
                  type="button"
                  class="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:bg-gray-400 transition-all hidden"
                  data-xt-pag
                  title="Slide xt-num"
                >
                  xt-content
                </button>
              </nav>
            </div>
          </div>
        </div>

        <nav class="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
          <button
            type="button"
            class="xt-button text-2xs py-2 px-3.5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:px-5 on:bg-gray-400 transition-all hidden"
            data-xt-pag
            title="Slide xt-num"
          >
            xt-num of xt-tot
          </button>
        </nav>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  overflow: true,
}
