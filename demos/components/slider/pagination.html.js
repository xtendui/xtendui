const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-slider" data-xt-slider>
      <div class="p-4 md:p-6 lg:p-8">
        <div
          class="xt-slides transition ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
          data-xt-slider-dragger>
          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4" data-xt-slider-content>1</div>
              <nav class="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                <button
                  type="button"
                  class="xt-button ${classes.buttonSlider()} hidden"
                  data-xt-slider-element
                  title="Slide xt-num">
                  xt-content
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4" data-xt-slider-content>2</div>
              <nav class="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                <button
                  type="button"
                  class="xt-button ${classes.buttonSlider()} hidden"
                  data-xt-slider-element
                  title="Slide xt-num">
                  xt-content
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4" data-xt-slider-content>3</div>
              <nav class="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                <button
                  type="button"
                  class="xt-button ${classes.buttonSlider()} hidden"
                  data-xt-slider-element
                  title="Slide xt-num">
                  xt-content
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-full ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4" data-xt-slider-content>4</div>
              <nav class="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                <button
                  type="button"
                  class="xt-button ${classes.buttonSlider()} hidden"
                  data-xt-slider-element
                  title="Slide xt-num">
                  xt-content
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4" data-xt-slider-content>5</div>
              <nav class="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                <button
                  type="button"
                  class="xt-button ${classes.buttonSlider()} hidden"
                  data-xt-slider-element
                  title="Slide xt-num">
                  xt-content
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4" data-xt-slider-content>6</div>
              <nav class="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                <button
                  type="button"
                  class="xt-button ${classes.buttonSlider()} hidden"
                  data-xt-slider-element
                  title="Slide xt-num">
                  xt-content
                </button>
              </nav>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}" data-xt-slider-target>
            <div
              class="xt-card ${classes.textDefault()} rounded${classes.cardSlideRadius()} ${classes.cardSlideDesign()} ${classes.cardSlideContent()}">
              <div class="xt-h4" data-xt-slider-content>7</div>
              <nav class="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                <button
                  type="button"
                  class="xt-button ${classes.buttonSlider()} hidden"
                  data-xt-slider-element
                  title="Slide xt-num">
                  xt-content
                </button>
              </nav>
            </div>
          </div>
        </div>

        <nav class="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
          <button
            type="button"
            class="xt-button ${classes.buttonSlider()} hidden"
            data-xt-slider-element
            title="Slide xt-num">
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
