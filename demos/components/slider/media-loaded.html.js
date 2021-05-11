const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-media-loaded">
    <div class="xt-slider">
      <div class="p-4 md:p-6 lg:p-8">
        <div class="xt-slides xt-row xt-row-4">
          <div class="xt-slide ${classes.slide()} ${classes.slide()}">
            <div class="xt-media-container bg-gray-600">
              <img class="xt-media relative" src="/img.svg" loading="lazy" alt="" />
              <div class="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                  ${classes.spinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} ${classes.slide()}">
            <div class="xt-media-container bg-gray-600">
              <img class="xt-media relative" src="/img-ratio.svg" loading="lazy" alt="" />
              <div class="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                  ${classes.spinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} ${classes.slide()}">
            <div class="xt-media-container bg-gray-600">
              <img class="xt-media relative" src="https://source.unsplash.com/ruJm3dBXCqw" loading="lazy" alt="" />
              <div class="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                  ${classes.spinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} ${classes.slide()}">
            <div class="xt-media-container bg-gray-600">
              <img class="xt-media relative" src="https://source.unsplash.com/wQLAGv4_OYs" loading="lazy" alt="" />
              <div class="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                  ${classes.spinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} ${classes.slide()}">
            <div class="xt-media-container bg-gray-600">
              <img class="xt-media relative" src="https://source.unsplash.com/OlTjeydUpQw" loading="lazy" alt="" />
              <div class="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                  ${classes.spinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} ${classes.slide()}">
            <div class="xt-media-container bg-gray-600">
              <img class="xt-media relative" src="https://source.unsplash.com/wEL2zPX3jDg" loading="lazy" alt="" />
              <div class="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                  ${classes.spinner({ classes: 'animate-xt-spinner' })}
                </div>
              </div>
            </div>
          </div>

          <div class="xt-slide ${classes.slide()} ${classes.slide()}">
            <div class="xt-media-container bg-gray-600">
              <img class="xt-media relative" src="https://source.unsplash.com/Tyg0rVhOTrE" loading="lazy" alt="" />
              <div class="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                  ${classes.spinner({ classes: 'animate-xt-spinner' })}
                </div>
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
`

export const object = {
  html: html,
  overflow: true,
}
