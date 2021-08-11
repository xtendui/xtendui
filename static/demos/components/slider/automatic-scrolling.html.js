const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-automaticscroll">
    <div class="xt-slider">
      <div class="p-4 md:p-6 lg:p-8">
        <div class="xt-slides xt-row xt-row-10" data-xt-slider-dragger>
          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-h4">One</div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-h4">Two</div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-h4">Three</div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-h4">Four</div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-h4">Five</div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-h4">Six</div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-h4">Seven</div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-h4">Eight</div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-h4">Nine</div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-h4">Ten</div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-h4">Eleven</div>
          </div>
        </div>

        <div class="*** absolute inset-y-0 left-0 w-16 bg-gradient-to-l from-transparent to-white ***"></div>

        <div class="*** absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white ***"></div>

        <nav class="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
          <button
            type="button"
            class="xt-button ${classes.buttonSlider()} hidden"
            data-xt-slider-element
            title="Slide xt-num"
          ></button>
        </nav>
      </div>
    </div>

    <div class="xt-slider">
      <div class="p-4 md:p-6 lg:p-8">
        <div class="xt-slides xt-row xt-row-2" data-xt-slider-dragger>
          <div class="xt-slide ${classes.slide()} *** w-60 ***" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500 pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} *** w-60 ***" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500 pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} *** w-60 ***" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500 pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} *** w-60 ***" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500 pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} *** w-60 ***" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500 pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} *** w-60 ***" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500 pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} *** w-60 ***" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500 pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>
        </div>

        <nav class="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
          <button
            type="button"
            class="xt-button ${classes.buttonSlider()} hidden"
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
