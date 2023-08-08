const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-slider" data-xt-slider="{ wrap: true, duration: 500 }">
      <div class="p-4 md:p-6 lg:p-8">
        <div
          class="xt-slides transition ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
          data-xt-slider-dragger>
          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()} *** group ***" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()} *** opacity-0 group-dir-before:translate-x-12 group-dir-after:-translate-x-12 group-in:transition group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:opacity-0 group-out-before:transition group-out-before:opacity-0 group-out-before:translate-x-12 group-out-after:-translate-x-12 ***">
              <div class="xt-h4">1</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()} *** group ***" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()} *** opacity-0 group-dir-before:translate-x-12 group-dir-after:-translate-x-12 group-in:transition group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:opacity-0 group-out-before:transition group-out-before:opacity-0 group-out-before:translate-x-12 group-out-after:-translate-x-12 ***">
              <div class="xt-h4">2</div>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()} *** group ***" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()} *** opacity-0 group-dir-before:translate-x-12 group-dir-after:-translate-x-12 group-in:transition group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:opacity-0 group-out-before:transition group-out-before:opacity-0 group-out-before:translate-x-12 group-out-after:-translate-x-12 ***">
              <div class="xt-h4">3</div>
            </div>
          </div>

          <div class="xt-slide w-full ${classes.slide()} *** group ***" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()} *** opacity-0 group-dir-before:translate-x-12 group-dir-after:-translate-x-12 group-in:transition group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:opacity-0 group-out-before:transition group-out-before:opacity-0 group-out-before:translate-x-12 group-out-after:-translate-x-12 ***">
              <div class="xt-h4">4</div>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()} *** group ***" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()} *** opacity-0 group-dir-before:translate-x-12 group-dir-after:-translate-x-12 group-in:transition group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:opacity-0 group-out-before:transition group-out-before:opacity-0 group-out-before:translate-x-12 group-out-after:-translate-x-12 ***">
              <div class="xt-h4">5</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()} *** group ***" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()} *** opacity-0 group-dir-before:translate-x-12 group-dir-after:-translate-x-12 group-in:transition group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:opacity-0 group-out-before:transition group-out-before:opacity-0 group-out-before:translate-x-12 group-out-after:-translate-x-12 ***">
              <div class="xt-h4">6</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()} *** group ***" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()} *** opacity-0 group-dir-before:translate-x-12 group-dir-after:-translate-x-12 group-in:transition group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:opacity-0 group-out-before:transition group-out-before:opacity-0 group-out-before:translate-x-12 group-out-after:-translate-x-12 ***">
              <div class="xt-h4">7</div>
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
            title="Slide xt-num"></button>
        </nav>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  overflow: true,
}
