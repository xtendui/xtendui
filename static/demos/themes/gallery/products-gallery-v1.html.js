const classes = require('src/gatsby/templates/snippets/classes').classes

const designAnim = () => 'transition opacity-0 group-in:opacity-100'
const itemAnim = () =>
  'opacity-0 translate-y-6 scale-95 group-in:transition group-in:opacity-100 group-in:translate-y-0 group-in:scale-100 group-out:transition group-out:translate-y-0 group-out:scale-100'
const itemAnimNogroup = () =>
  'opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100'
const itemAnimOpacity = () =>
  'opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint'

const html = /* HTML */ `
  <div class="demo--products-gallery-v1">
    <!-- For seo purpose add product metadata https://developers.google.com/search/docs/data-types/product -->
    <form>
      <div class="container md:py-12 lg:py-20 xl:py-28">
        <div class="xt-row md:xt-row-8 lg:xt-row-12 items-stretch">
          <div class="w-full md:w-5/12 lg:w-6/12 xl:w-7/12">
            <div class="relative">
              <div
                class="*** product-gallery *** overflow-y-auto overflow-x-hidden xt-overflow-sub h-96 xt-container-remove md:!m-0 md:!h-auto md:!overflow-hidden">
                <div class="xt-list flex-col">
                  <div
                    class="*** product-image w-full off:hidden out:pointer-events-none ${itemAnimNogroup()} ***"
                    data-node-variants-target
                    data-xt-group="red">
                    <a href="#product-image-overlay-1" id="product-image-1" title="Expand image 1">
                      <div class="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                        <img
                          class="xt-media relative"
                          src="https://source.unsplash.com/164_6wVEHfI"
                          loading="lazy"
                          alt="" />
                        <div
                          class="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                      </div>
                    </a>
                  </div>

                  <div
                    class="*** product-image w-full off:hidden out:pointer-events-none ${itemAnimNogroup()} ***"
                    data-node-variants-target
                    data-xt-group="red">
                    <a href="#product-image-overlay-2" id="product-image-2" title="Expand image 2">
                      <div class="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                        <img
                          class="xt-media relative"
                          src="https://source.unsplash.com/j7zu2kpTnwY"
                          loading="lazy"
                          alt="" />
                        <div
                          class="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                      </div>
                    </a>
                  </div>

                  <div
                    class="*** product-image w-full off:hidden out:pointer-events-none ${itemAnimNogroup()} ***"
                    data-node-variants-target
                    data-xt-group="green">
                    <a href="#product-image-overlay-3" id="product-image-3" title="Expand image 3">
                      <div class="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                        <img
                          class="xt-media relative"
                          src="https://source.unsplash.com/kP6knT7tjn4"
                          loading="lazy"
                          alt="" />
                        <div
                          class="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                      </div>
                    </a>
                  </div>

                  <div
                    class="*** product-image w-full off:hidden out:pointer-events-none ${itemAnimNogroup()} ***"
                    data-node-variants-target
                    data-xt-group="blue">
                    <a href="#product-image-overlay-4" id="product-image-4" title="Expand image 4">
                      <div class="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                        <img
                          class="xt-media relative"
                          src="https://source.unsplash.com/l8p1aWZqHvE"
                          loading="lazy"
                          alt="" />
                        <div
                          class="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                      </div>
                    </a>
                  </div>

                  <div
                    class="*** product-image w-full off:hidden out:pointer-events-none ${itemAnimNogroup()} ***"
                    data-node-variants-target
                    data-xt-group="blue">
                    <a href="#product-image-overlay-5" id="product-image-5" title="Expand image 5">
                      <div class="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                        <img
                          class="xt-media relative"
                          src="https://source.unsplash.com/gn07k9Kmx9c"
                          loading="lazy"
                          alt="" />
                        <div
                          class="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                      </div>
                    </a>
                  </div>

                  <div
                    class="*** product-image w-full off:hidden out:pointer-events-none ${itemAnimNogroup()} ***"
                    data-node-variants-target
                    data-xt-group="red,green">
                    <a href="#product-image-overlay-6" id="product-image-6" title="Expand image 6">
                      <div class="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                        <img
                          class="xt-media relative"
                          src="https://source.unsplash.com/gpii_myxZG0"
                          loading="lazy"
                          alt="" />
                        <div
                          class="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                      </div>
                    </a>
                  </div>

                  <div
                    class="*** product-image w-full off:hidden out:pointer-events-none ${itemAnimNogroup()} ***"
                    data-node-variants-target
                    data-xt-group="red,green">
                    <a href="#product-image-overlay-7" id="product-image-7" title="Expand image 7">
                      <div class="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                        <img
                          class="xt-media relative"
                          src="https://source.unsplash.com/DzoOduUanpQ"
                          loading="lazy"
                          alt="" />
                        <div
                          class="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="absolute h-full bottom-0 right-0 md:hidden">
                  <div class="xt-list flex-col h-full justify-center">
                    <a
                      href="#product-image-1"
                      class="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                      title="Go to image 1"
                      data-node-variants-target
                      data-xt-group="red">
                      <div
                        class="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                    </a>

                    <a
                      href="#product-image-2"
                      class="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                      title="Go to image 2"
                      data-node-variants-target
                      data-xt-group="red">
                      <div
                        class="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                    </a>

                    <a
                      href="#product-image-3"
                      class="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                      title="Go to image 3"
                      data-node-variants-target
                      data-xt-group="green">
                      <div
                        class="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                    </a>

                    <a
                      href="#product-image-4"
                      class="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                      title="Go to image 4"
                      data-node-variants-target
                      data-xt-group="blue">
                      <div
                        class="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                    </a>

                    <a
                      href="#product-image-5"
                      class="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                      title="Go to image 5"
                      data-node-variants-target
                      data-xt-group="blue">
                      <div
                        class="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                    </a>

                    <a
                      href="#product-image-6"
                      class="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                      title="Go to image 6"
                      data-node-variants-target
                      data-xt-group="red,green">
                      <div
                        class="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                    </a>

                    <a
                      href="#product-image-7"
                      class="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                      title="Go to image 7"
                      data-node-variants-target
                      data-xt-group="red,green">
                      <div
                        class="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                    </a>
                  </div>
                </div>

                <div aria-label="Modal" class="xt-overlay group" id="overlay--product-images">
                  <div class="xt-backdrop z-below bg-gray-800 *** ${itemAnimOpacity()} group-in:opacity-25 ***"></div>
                  <div class="xt-overlay-container *** p-0 ***">
                    <button
                      type="button"
                      class="xt-button xt-dismiss fixed z-above top-0 right-0 p-3 text-2xl ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()} *** ${itemAnimOpacity()} group-in:opacity-100 ***"
                      aria-label="Close">
                      ${classes.iconX()}
                    </button>
                    <div class="xt-overlay-inner">
                      <div
                        class="xt-card *** min-h-screen items-center justify-center *** ${classes.overlayShadow()} ${classes.textDefault()} ${classes.cardWhite()} *** ${designAnim()} ***">
                        <div class="w-full *** ${itemAnim()} ***">
                          <div
                            class="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                            data-node-variants-target
                            data-xt-group="red">
                            <img
                              class="xt-media relative"
                              id="product-image-overlay-1"
                              src="https://source.unsplash.com/164_6wVEHfI"
                              loading="lazy"
                              alt="" />
                          </div>

                          <div
                            class="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                            data-node-variants-target
                            data-xt-group="red">
                            <img
                              class="xt-media relative"
                              id="product-image-overlay-2"
                              src="https://source.unsplash.com/j7zu2kpTnwY"
                              loading="lazy"
                              alt="" />
                          </div>

                          <div
                            class="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                            data-node-variants-target
                            data-xt-group="green">
                            <img
                              class="xt-media relative"
                              id="product-image-overlay-3"
                              src="https://source.unsplash.com/kP6knT7tjn4"
                              loading="lazy"
                              alt="" />
                          </div>

                          <div
                            class="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                            data-node-variants-target
                            data-xt-group="blue">
                            <img
                              class="xt-media relative"
                              id="product-image-overlay-4"
                              src="https://source.unsplash.com/l8p1aWZqHvE"
                              loading="eagelazyr"
                              alt="" />
                          </div>

                          <div
                            class="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                            data-node-variants-target
                            data-xt-group="blue">
                            <img
                              class="xt-media relative"
                              id="product-image-overlay-5"
                              src="https://source.unsplash.com/gn07k9Kmx9c"
                              loading="lazy"
                              alt="" />
                          </div>

                          <div
                            class="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                            data-node-variants-target
                            data-xt-group="red,green">
                            <img
                              class="xt-media relative"
                              id="product-image-overlay-6"
                              src="https://source.unsplash.com/gpii_myxZG0"
                              loading="lazy"
                              alt="" />
                          </div>

                          <div
                            class="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                            data-node-variants-target
                            data-xt-group="red,green">
                            <img
                              class="xt-media relative"
                              id="product-image-overlay-7"
                              src="https://source.unsplash.com/DzoOduUanpQ"
                              loading="lazy"
                              alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="w-full md:w-7/12 lg:w-6/12 xl:w-5/12"
            id="product-arrow-target"
            data-xt-stickyflow="{ element: '[data-xt-stickyflow-el]', filler: '[data-xt-stickyflow-filler]' }">
            <div class="*** pointer-events-none absolute md:relative ***" data-xt-stickyflow-filler></div>
            <div class="py-12 *** md:sticky ***" data-xt-stickyflow-el>
              <h1 class="xt-h2">Product Title</h1>

              <div class="mb-4 xt-list xt-list-2 items-baseline">
                <div>Model</div>
                <div class="font-medium" data-node-variants-options>
                  <span
                    class="*** off:hidden out:pointer-events-none ***"
                    data-node-variants-target
                    data-xt-group="red">
                    Red
                  </span>
                  <span
                    class="*** off:hidden out:pointer-events-none ***"
                    data-node-variants-target
                    data-xt-group="green">
                    Green
                  </span>
                  <span
                    class="*** off:hidden out:pointer-events-none ***"
                    data-node-variants-target
                    data-xt-group="blue">
                    Blue
                  </span>
                </div>
              </div>

              <div class="mb-4 xt-list xt-list-2">
                <label
                  class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonBorderGray()} ${classes.buttonTextAnim()}">
                  Red
                  <input
                    type="radio"
                    role="radiogroup"
                    aria-label="Red"
                    class="sr-only"
                    name="radio-button"
                    data-node-variants-element
                    data-xt-group="red"
                    data-xt-hash="red" />
                </label>

                <label
                  class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonBorderGray()} ${classes.buttonTextAnim()}">
                  Green
                  <input
                    type="radio"
                    role="radiogroup"
                    aria-label="Green"
                    class="sr-only"
                    name="radio-button"
                    data-node-variants-element
                    data-xt-group="green"
                    data-xt-hash="green" />
                </label>

                <label
                  class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonBorderGray()} ${classes.buttonTextAnim()}">
                  Blue
                  <input
                    type="radio"
                    role="radiogroup"
                    aria-label="Blue"
                    class="sr-only"
                    name="radio-button"
                    data-node-variants-element
                    data-xt-group="blue"
                    data-xt-hash="blue" />
                </label>
              </div>

              <div class="xt-card my-6 ${classes.textDefault()} ${classes.cardGray()}">
                <div class="${classes.cardSm()}">
                  <div
                    class="*** off:hidden out:pointer-events-none *** font-bold text-2xl leading-none mb-6"
                    data-node-variants-target
                    data-xt-group="red">
                    229,00&nbsp;€
                  </div>

                  <div
                    class="*** off:hidden out:pointer-events-none *** font-bold text-2xl leading-none mb-6"
                    data-node-variants-target
                    data-xt-group="green">
                    <span class="mr-1 text-red-500"> 229,15&nbsp;€ </span>
                    <strike class="text-base"> 180,00&nbsp;€ </strike>
                  </div>

                  <div
                    class="*** off:hidden out:pointer-events-none *** font-bold text-2xl leading-none mb-6"
                    data-node-variants-target
                    data-xt-group="blue">
                    215,00&nbsp;€
                  </div>

                  <button
                    type="submit"
                    class="xt-button w-full ${classes.buttonLg()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
                    Add to cart
                  </button>
                </div>
              </div>

              <div class="leading-loose text-black text-opacity-75">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur
                  semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque
                  lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo.
                  Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor
                  in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat
                  quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam
                  velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.
                </p>
                <p>
                  Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere
                  tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis
                  fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac
                  velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis
                  id est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
