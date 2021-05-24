const classes = require('src/gatsby/templates/snippets/classes').classes

const cardWhite = () => 'text-black xt-links-default'

const interactionDefault = () =>
  'text-black bg-gray-200 border-transparent border transform transition hover:bg-gray-300 hover:border-gray-400 hover:-translate-y-1 active:bg-gray-400 active:translate-y-0 on:bg-gray-400 on:translate-y-0'
const interactionPrimary = () =>
  'text-white bg-primary-500 border-transparent border transform transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 active:bg-primary-700 active:translate-y-0 on:bg-primary-700 on:translate-y-0'
const buttonDefault = () =>
  `font-sans font-semibold leading-snug tracking-wider uppercase ${interactionDefault()} hover:shadow-lg active:shadow-sm on:shadow-sm`
const buttonPrimary = () =>
  `font-sans font-semibold leading-snug tracking-wider uppercase ${interactionPrimary()} hover:shadow-lg active:shadow-sm on:shadow-sm`

const animDesign = () =>
  'transform opacity-0 scale-50 group-in:transition group-in:duration-500 group-in:opacity-100 group-in:scale-100 group-out:transition group-out:duration-300 group-out:delay-200 group-out:ease-in-out-quint'
const animItem = () =>
  'transform opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2'
const animItemOpacity = () =>
  'opacity-0 transition-opacity duration-300 ease-in-out-quint group-in:delay-200 group-in:ease-out-quint group-in:opacity-100'

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()} text-black bg-gray-200 text-center">Button</div>

    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonDefault()}">
        Gray
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}">
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} text-black font-semibold leading-snug tracking-wider uppercase transform transition hover:-translate-y-1 active:translate-y-0 on:translate-y-0"
      >
        Text
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} xt-link transform transition hover:-translate-y-1 active:translate-y-0 on:translate-y-0"
      >
        Link
      </button>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-200 text-center">Drop</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop="{ elements: ':scope > .xt-button', targets: ':scope > .xt-drop', duration: 500 }">
        <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}">
          list
        </button>

        <div class="xt-drop p-4 group">
          <div class="xt-drop-inner">
            <div class="xt-design ${classes.cardRadius()} shadow-drop bg-white ${animDesign()}"></div>
            <div class="xt-card w-64 py-3.5 ${animItem()}">
              <nav class="xt-list flex-col">
                <a href="#" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                  Dolor sit
                </button>
                <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                  Amet
                </button>
              </nav>
            </div>
          </div>
          <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white ${cardWhite()} ${animItemOpacity()}"></div>
        </div>
      </div>

      <div data-xt-drop="{ elements: ':scope > .xt-button', targets: ':scope > .xt-drop', duration: 500 }">
        <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}">
          card
        </button>

        <div class="xt-drop p-4 group">
          <div class="xt-drop-inner">
            <div class="xt-design ${classes.cardRadius()} shadow-drop bg-white ${animDesign()}"></div>
            <div class="xt-card w-64 ${animItem()}">
              <button
                type="button"
                class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                aria-label="Close"
              >
                ${classes.iconX()}
              </button>
              <div class="${classes.cardSm()}">
                <div class="xt-h5">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis.
                </p>
              </div>
            </div>
          </div>
          <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white ${cardWhite()} ${animItemOpacity()}"></div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-200 text-center">Tooltip</div>

    <div class="xt-list xt-list-3 items-center">
      <div
        data-xt-tooltip="{ elements: ':scope > .xt-tooltip-item', targets: ':scope > .xt-tooltip-item > .xt-tooltip', duration: 500 }"
      >
        <div class="xt-tooltip-item">
          <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}">
            tooltip
          </button>

          <div class="xt-tooltip p-2 group">
            <div class="xt-tooltip-inner">
              <div class="xt-design ${classes.tooltipRadius()} shadow-tooltip bg-black ${animDesign()}"></div>
              <div class="relative ${classes.tooltipMd()} font-semibold text-white xt-links-inverse ${animItem()}">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below ${animItemOpacity()}"></div>
          </div>
        </div>
      </div>

      <div
        data-xt-tooltip="{ elements: ':scope > .xt-tooltip-item', targets: ':scope > .xt-tooltip-item > .xt-tooltip', duration: 500 }"
      >
        <div class="xt-tooltip-item">
          <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}">
            list group
          </button>

          <div class="xt-tooltip p-2 group">
            <div class="xt-tooltip-inner">
              <div class="xt-design ${classes.tooltipRadius()} shadow-tooltip bg-white ${animDesign()}"></div>
              <div class="font-semibold text-black xt-links-default ${animItem()}">
                <form class="text-sm">
                  <div class="xt-list flex-nowrap max-w-sm ${cardWhite()} ${animItem()}">
                    <div class="xt-list-inner flex-auto">
                      <button type="button" class="xt-button ${classes.buttonMd()} rounded-l-md ${buttonDefault()}">
                        ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                      </button>
                      <input
                        type="text"
                        class="${classes.input()} ${classes.inputDefault()}"
                        aria-label="Search"
                        placeholder="Seach Catalog"
                      />
                    </div>

                    <button type="button" class="xt-button ${classes.buttonMd()} rounded-r-md ${buttonPrimary()}">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-gray-400 z-below ${animItemOpacity()}"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-200 text-center">Overlay</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay="{ elements: ':scope > .xt-button', targets: ':scope > .xt-overlay', duration: 500 }">
        <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}">
          screen full
        </button>
        <div class="xt-overlay group">
          <div class="xt-backdrop bg-black pointer-events-none transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container p-0">
            <button
              type="button"
              class="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl ${cardWhite()} ${animItem()}"
              aria-label="Close"
            >
              ${classes.iconX()}
            </button>
            <div class="xt-overlay-inner">
              <div class="xt-design rounded-md bg-white ${animDesign()}"></div>

              <div class="xt-card xt-min-h-screen items-center justify-center rounded-md ${cardWhite()} ${animItem()}">
                <div class="xt-media-container bg-gray-600 xt-ratio-100">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ elements: ':scope > .xt-button', targets: ':scope > .xt-overlay', duration: 500 }">
        <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}">
          Menu
        </button>

        <div class="xt-overlay group">
          <div class="xt-backdrop bg-black pointer-events-none transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
            <div class="xt-overlay-inner">
              <div class="xt-design bg-white ${animDesign()}"></div>

              <div class="xt-card xt-min-h-screen ${cardWhite()} ${animItem()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="xt-list bg-primary-500">
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}"
                  >
                    Menu
                  </button>
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}"
                  >
                    Account
                  </button>
                </div>
                <div class="xt-media-container bg-gray-600 h-48">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
                <div class="${classes.cardMd()}">
                  <div class="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>
                <div class="${classes.cardSm()} bg-gray-300 mt-auto">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                    turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ elements: ':scope > .xt-button', targets: ':scope > .xt-overlay', duration: 500 }">
        <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}">
          contact
        </button>

        <div class="xt-overlay group">
          <div class="xt-backdrop bg-black pointer-events-none transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner">
              <div class="xt-design rounded-md md:rounded-tr-none shadow-overlay bg-white ${animDesign()}"></div>

              <div class="xt-card ${classes.cardRadius()} ${cardWhite()} ${animItem()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl ${classes.buttonCloseOutside()} md:p-3 md:right-auto md:left-100"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="md:xt-card-group">
                  <div class="${classes.cardMd()} md:w-7/12">
                    <div class="xt-h4">Contact us</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                    <form class="text-sm">
                      <div class="xt-row xt-row-x-6 xt-row-y-4">
                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Name </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
                            aria-label="Name"
                          />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Surname </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
                            aria-label="Surname"
                          />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Email </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
                            aria-label="Email"
                          />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Telephone </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
                            aria-label="Telephone"
                          />
                        </div>

                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Subject </label>
                          <select
                            class="${classes.input()} xt-select ${classes.inputRadius()} ${classes.inputDefault()}"
                            aria-label="Subject"
                          >
                            <option selected value="">Select an option</option>
                            <option>Test</option>
                            <option>Test</option>
                            <option>Test</option>
                          </select>
                        </div>

                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Message </label>
                          <textarea
                            class="${classes.input()} ${classes.textarea()} ${classes.inputRadius()} ${classes.inputDefault()} h-24 resize-vertical"
                            aria-label="Message"
                          ></textarea>
                        </div>

                        <div class="w-full">
                          <label class="${classes.checkLabel()}">
                            <input
                              type="checkbox"
                              class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkDefault()}"
                            />
                            <span class="${classes.checkContent()}">
                              I <strong>read and accept</strong> the
                              <a href="#" target="_blank" rel="noopener">sales conditions</a> and the
                              <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                            </span>
                          </label>
                        </div>

                        <div class="w-full">
                          <button
                            type="submit"
                            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="md:w-5/12 flex flex-col">
                    <div class="xt-media-container bg-gray-600 h-48 md:xt-ratio-100">
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                    </div>
                    <div class="${classes.cardMd()} bg-gray-300 rounded-b-md md:rounded-bl-none flex-full">
                      <p class="xt-h5">Didn&apos;t find what you was looking for?</p>
                      <p>
                        Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at
                        <a href="mailto:info@info.com">info@info.com</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ elements: ':scope > .xt-button', targets: ':scope > .xt-overlay', duration: 500 }">
        <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}">
          newsletter
        </button>

        <div class="xt-overlay group">
          <div class="xt-backdrop bg-black pointer-events-none transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner">
              <div class="xt-design rounded-md md:rounded-tr-none shadow-overlay bg-white ${animDesign()}"></div>

              <div class="xt-card ${classes.cardRadius()} ${cardWhite()} ${animItem()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl ${classes.buttonCloseOutside()} md:p-3 md:right-auto md:left-100"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="md:xt-card-group">
                  <div class="md:w-5/12 flex flex-col">
                    <div
                      class="xt-media-container bg-gray-600 rounded-t-md md:rounded-tr-none h-48 lg:xt-ratio-100 md:flex-full"
                    >
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                    </div>
                  </div>

                  <div class="${classes.cardMd()} md:w-7/12">
                    <div class="xt-h4">Subscribe to our newsletter</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                    <form class="text-sm">
                      <div class="xt-row xt-row-x-6 xt-row-y-4">
                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Email </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
                            aria-label="Email"
                          />
                        </div>

                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Subject </label>

                          <div class="xt-row xt-row-x-8 xt-row-y-2">
                            <div class="w-full sm:w-auto">
                              <label class="${classes.checkLabel()}">
                                <input
                                  type="radio"
                                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioDefault()}"
                                  name="radio-usage"
                                  checked
                                />
                                <span class="${classes.checkContent()}"> Option 1 </span>
                              </label>
                            </div>

                            <div class="w-full sm:w-auto">
                              <label class="${classes.checkLabel()}">
                                <input
                                  type="radio"
                                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioDefault()}"
                                  name="radio-usage"
                                />
                                <span class="${classes.checkContent()}"> Option 2 </span>
                              </label>
                            </div>

                            <div class="w-full sm:w-auto">
                              <label class="${classes.checkLabel()}">
                                <input
                                  type="radio"
                                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioDefault()}"
                                  name="radio-usage"
                                />
                                <span class="${classes.checkContent()}"> Option 3 </span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="w-full">
                          <label class="${classes.checkLabel()}">
                            <input
                              type="checkbox"
                              class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkDefault()}"
                            />
                            <span class="${classes.checkContent()}">
                              I <strong>read and accept</strong> the
                              <a href="#" target="_blank" rel="noopener">sales conditions</a> and the
                              <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                            </span>
                          </label>
                        </div>

                        <div class="w-full">
                          <button
                            type="submit"
                            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${buttonPrimary()}"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="${classes.cardSm()} rounded-b-md bg-gray-300">
                  <p>Receive <strong>free discount</strong> periodically on all our products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-200 text-center">Card</div>

    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <button type="button" class="xt-card ${interactionDefault()} hover:shadow-lg active:shadow-sm on:shadow-sm">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Default</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
              tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
              magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </button>
      </div>

      <div class="w-full md:w-6/12">
        <button
          type="button"
          class="xt-card ${classes.cardRadius()} ${interactionPrimary()} hover:shadow-lg active:shadow-sm on:shadow-sm"
        >
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Primary</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
              tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
              magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </button>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
