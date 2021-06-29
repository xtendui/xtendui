const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-nooverflow">
    <div class="xt-slider">
      <div class="p-4 md:p-6 lg:p-8">
        <div class="xt-slides xt-row xt-row-4">
          <div class="xt-slide w-6/12 sm:w-6/12 md:w-3/12 ${classes.slide()}">
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">1</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-6/12 md:w-3/12 ${classes.slide()}">
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">2</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-6/12 md:w-3/12 ${classes.slide()}">
            <div class="xt-card ${classes.cardSlide()}">
              <div class="xt-h4">3</div>
            </div>
          </div>
        </div>

        <nav class="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
          <button
            type="button"
            class="xt-button ${classes.buttonSlider()} hidden"
            data-xt-pag
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
