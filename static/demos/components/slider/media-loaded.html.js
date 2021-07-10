const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-media-loaded">
    <div class="xt-slider">
      <div class="p-4 md:p-6 lg:p-8">
        <div class="xt-slides xt-row xt-row-4" data-xt-slider-dragger>
          <div class="xt-slide ${classes.slide()} ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500">
              <img class="xt-media relative" src="/img.svg" loading="lazy" alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500">
              <img class="xt-media relative" src="/img-ratio.svg" loading="lazy" alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500">
              <img class="xt-media relative" src="https://source.unsplash.com/ruJm3dBXCqw" loading="lazy" alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500">
              <img class="xt-media relative" src="https://source.unsplash.com/wQLAGv4_OYs" loading="lazy" alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500">
              <img class="xt-media relative" src="https://source.unsplash.com/OlTjeydUpQw" loading="lazy" alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500">
              <img class="xt-media relative" src="https://source.unsplash.com/wEL2zPX3jDg" loading="lazy" alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-500">
              <img class="xt-media relative" src="https://source.unsplash.com/Tyg0rVhOTrE" loading="lazy" alt="" />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
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
