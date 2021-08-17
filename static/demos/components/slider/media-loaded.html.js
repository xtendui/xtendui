const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-media-loaded">
    <div class="xt-slider" data-xt-slider="{ mediaLoaded: true, mediaLoadedReinit: true }">
      <div class="p-4 md:p-6 lg:p-8">
        <div
          class="xt-slides transition-all ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
          data-xt-slider-dragger
        >
          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-300">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="/img.svg"
                loading="lazy"
                alt=""
              />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="/img.svg" loading="lazy" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-300">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="/img-ratio.svg"
                loading="lazy"
                alt=""
              />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="/img-ratio.svg" loading="lazy" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-300">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="https://source.unsplash.com/ruJm3dBXCqw"
                loading="lazy"
                alt=""
              />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="https://source.unsplash.com/ruJm3dBXCqw" loading="lazy" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-300">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="https://source.unsplash.com/wQLAGv4_OYs"
                loading="lazy"
                alt=""
              />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="https://source.unsplash.com/wQLAGv4_OYs" loading="lazy" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-300">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="https://source.unsplash.com/OlTjeydUpQw"
                loading="lazy"
                alt=""
              />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="https://source.unsplash.com/OlTjeydUpQw" loading="lazy" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-300">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="https://source.unsplash.com/wEL2zPX3jDg"
                loading="lazy"
                alt=""
              />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="https://source.unsplash.com/wEL2zPX3jDg" loading="lazy" alt="" />
            </div>
          </div>

          <div class="xt-slide ${classes.slide()}" data-xt-slider-target>
            <div class="xt-media-container bg-gray-300">
              <img
                class="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                src="https://source.unsplash.com/Tyg0rVhOTrE"
                loading="lazy"
                alt=""
              />
              <div class="${classes.loader()} bg-white bg-opacity-75">
                <div class="${classes.spinner()} w-6 h-6 text-primary-500">
                  ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
            <div class="hidden" data-xt-slider-content>
              <img class="h-full w-auto" src="https://source.unsplash.com/Tyg0rVhOTrE" loading="lazy" alt="" />
            </div>
          </div>
        </div>

        <nav class="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
          <button type="button" class="xt-button h-10 hidden" data-xt-slider-element title="Slide xt-num">
            xt-content
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
