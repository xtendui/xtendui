const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-exclude">
    <div class="demo--slider-exclude-toggle">
      <div class="xt-list xt-list-3 items-center p-4 pb-0 md:p-6 md:pb-0 lg:p-8 lg:pb-0">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
          data-xt-group="group0"
        >
          Group0
        </button>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()} on"
          data-xt-group="group1"
        >
          Group1
        </button>

        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" id="toggle--unique-0">Target 0</div>

        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" id="toggle--unique-1">Target 1</div>
      </div>

      <div class="xt-slider">
        <div class="p-4 md:p-6 lg:p-8">
          <div class="xt-slides xt-row xt-row-4">
            <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}">
              <div class="xt-toggle" data-xt-group="group1">
                <div class="xt-card rounded-md ${classes.cardSlide()}">
                  <div class="xt-h4">1</div>
                </div>
              </div>
            </div>

            <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}">
              <div class="xt-toggle" data-xt-group="group0,group1">
                <div class="xt-card rounded-md ${classes.cardSlide()}">
                  <div class="xt-h4">2</div>
                </div>
              </div>
            </div>

            <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}">
              <div class="xt-toggle" data-xt-group="group0">
                <div class="xt-card rounded-md ${classes.cardSlide()}">
                  <div class="xt-h4">3</div>
                </div>
              </div>
            </div>

            <div class="xt-slide w-full ${classes.slide()}">
              <div class="xt-toggle" data-xt-group="group1">
                <div class="xt-card rounded-md ${classes.cardSlide()}">
                  <div class="xt-h4">4</div>
                </div>
              </div>
            </div>

            <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}">
              <div class="xt-toggle" data-xt-group="group0">
                <div class="xt-card rounded-md ${classes.cardSlide()}">
                  <div class="xt-h4">5</div>
                </div>
              </div>
            </div>

            <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}">
              <div class="xt-toggle" data-xt-group="group0,group1">
                <div class="xt-card rounded-md ${classes.cardSlide()}">
                  <div class="xt-h4">6</div>
                </div>
              </div>
            </div>

            <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}">
              <div class="xt-toggle" data-xt-group="group1">
                <div class="xt-card rounded-md ${classes.cardSlide()}">
                  <div class="xt-h4">7</div>
                </div>
              </div>
            </div>
          </div>

          <nav class="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
            <button
              type="button"
              class="xt-button text-2xs py-2 px-3.5 w-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:px-5 on:bg-gray-400 transition-all hidden"
              data-xt-pag
              title="Slide xt-num"
            ></button>
          </nav>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  overflow: true,
}
