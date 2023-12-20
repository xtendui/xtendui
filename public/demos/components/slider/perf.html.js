const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-perf">
    <div class="xt-slider" data-xt-slider>
      <div class="p-4 md:p-6 lg:p-8">
        <div
          class="xt-slides transition ease-out-expo duration-300 on:duration-500 xt-row xt-row-4"
          data-xt-slider-dragger>
          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img-ratio.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img-ratio.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img-ratio.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img-ratio.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img-ratio.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img-ratio.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img-ratio.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img-ratio.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img-ratio.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img-ratio.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img-ratio.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
            </div>
          </div>

          <div class="xt-slide w-6/12 ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-200 pb-[100%] rounded-md overflow-hidden">
              <img class="xt-media object-cover" src="/img-ratio.svg" loading="eager" alt="" />
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
