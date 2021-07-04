const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-automaticscroll">
    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Constant speed</div>

    <div class="xt-slider slider--text my-12">
      <div class="p-4 md:p-6 lg:p-8">
        <div class="xt-slides xt-row xt-row-10" data-xt-slider-dragger>
          <div class="xt-slide ${classes.slide()} xt-list xt-list-10 flex-nowrap whitespace-nowrap" data-xt-slider-slide>
            <a href="#test-link-1" class="slide-text" title="item 1">
              <div class="xt-h4">One</div>
            </a>
            <a href="#test-link-2" class="slide-text" title="item 2">
              <div class="xt-h4">Two</div>
            </a>
            <a href="#test-link-3" class="slide-text" title="item 3">
              <div class="xt-h4">Three</div>
            </a>
            <a href="#test-link-4" class="slide-text" title="item 4">
              <div class="xt-h4">Four</div>
            </a>
            <a href="#test-link-5" class="slide-text" title="item 5">
              <div class="xt-h4">Five</div>
            </a>
            <a href="#test-link-6" class="slide-text" title="item 6">
              <div class="xt-h4">Six</div>
            </a>
            <a href="#test-link-7" class="slide-text" title="item 7">
              <div class="xt-h4">Seven</div>
            </a>
            <a href="#test-link-8" class="slide-text" title="item 8">
              <div class="xt-h4">Eight</div>
            </a>
            <a href="#test-link-9" class="slide-text" title="item 9">
              <div class="xt-h4">Nine</div>
            </a>
            <a href="#test-link-10" class="slide-text" title="item 10">
              <div class="xt-h4">Ten</div>
            </a>
            <a href="#test-link-11" class="slide-text" title="item 11">
              <div class="xt-h4">Eleven</div>
            </a>
            <a href="#test-link-12" class="slide-text" title="item 12">
              <div class="xt-h4">Twelve</div>
            </a>
          </div>
        </div>

        <div class="absolute inset-y-0 left-0 w-16 bg-gradient-to-l from-transparent to-white"></div>

        <div class="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white"></div>

        <nav class="hidden" data-xt-slider-pagination>
          <button type="button" class="xt-button hidden" data-xt-pag></button>
        </nav>
      </div>

      <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Images</div>

      <div class="xt-slider slider--img my-12">
        <div class="p-4 md:p-6 lg:p-8">
          <div class="xt-slides xt-row xt-row-px" data-xt-slider-dragger>
            <div class="xt-slide ${classes.slide()} xt-list xt-list-px flex-nowrap" data-xt-slider-slide>
              <a href="#test-link-1" class="slide-asset" title="item 0">
                <div class="xt-media-container bg-gray-500 xt-ratio-37.5">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
              </a>
              <a href="#test-link-2" class="slide-asset" title="item 1">
                <div class="xt-media-container bg-gray-500 xt-ratio-37.5">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
              </a>
              <a href="#test-link-3" class="slide-asset" title="item 2">
                <div class="xt-media-container bg-gray-500 xt-ratio-37.5">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
              </a>
              <a href="#test-link-4" class="slide-asset" title="item 3">
                <div class="xt-media-container bg-gray-500 xt-ratio-37.5">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
              </a>
              <a href="#test-link-5" class="slide-asset" title="item 4">
                <div class="xt-media-container bg-gray-500 xt-ratio-37.5">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
              </a>
              <a href="#test-link-6" class="slide-asset" title="item 5">
                <div class="xt-media-container bg-gray-500 xt-ratio-37.5">
                  <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="eager" alt="" />
                </div>
              </a>
            </div>
          </div>

          <div class="absolute inset-y-0 left-0 w-16 bg-gradient-to-l from-transparent to-white"></div>

          <div class="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white"></div>

          <nav class="hidden" data-xt-slider-pagination>
            <button type="button" class="xt-button hidden" data-xt-pag></button>
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
