const classes = require('src/gatsby/templates/snippets/classes').classes

const interactionDefault = () =>
  '*** bg-gray-100 border-transparent border transition hover:bg-gray-200 hover:border-gray-300 hover:-translate-y-1 hover:shadow-lg active:bg-gray-300 active:translate-y-0 active:shadow-md on:bg-gray-300 on:translate-y-0 on:shadow-md ***'
const interactionPrimary = () =>
  '*** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-md on:bg-primary-700 on:translate-y-0 on:shadow-md ***'
const animDesign = () =>
  '*** opacity-0 scale-50 group-in:transition group-in:duration-500 group-in:opacity-100 group-in:scale-100 group-out:transition group-out:duration-300 group-out:delay-200 group-out:ease-in-out-quint ***'
const animItem = () =>
  '*** opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2 ***'
const animItemOpacity = () =>
  '*** opacity-0 transition-opacity duration-300 ease-in-out-quint group-in:delay-200 group-in:ease-out-quint group-in:opacity-100 ***'

const buttonDefault = () => `font-semibold leading-snug tracking-wider uppercase text-black ${interactionDefault()}`
const buttonPrimary = () => `font-semibold leading-snug tracking-wider uppercase text-white ${interactionPrimary()}`
const cardDefault = () => `${classes.cardRadius()} text-black ${interactionDefault()}`
const cardPrimary = () => `${classes.cardRadius()} text-white ${interactionPrimary()}`
const cardWhite = () => 'text-black xt-links-default'

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Button</div>

    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonDefault()}">
        Gray
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}">
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} text-black font-semibold leading-snug tracking-wider uppercase transition hover:-translate-y-1 active:translate-y-0 on:translate-y-0"
      >
        Text
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} xt-link transition hover:-translate-y-1 active:translate-y-0 on:translate-y-0"
      >
        Link
      </button>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Drop</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-drop-element
        >
          group
        </button>

        <div class="xt-drop p-3 group" data-xt-drop-target>
          <div class="relative">
            <div
              class="*** xt-design *** rounded${classes.dropCardRadius()} shadow-drop bg-white ${animDesign()}"
            ></div>
            <div class="xt-card w-64 ${classes.dropGroupMd()} ${animItem()}">
              <nav class="xt-list flex-col">
                <a
                  href="#"
                  class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
                >
                  Dolor sit
                </button>
                <button
                  type="button"
                  class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
                >
                  Amet
                </button>
              </nav>
            </div>
          </div>
          <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-white ${animItemOpacity()}"></div>
        </div>
      </div>

      <div data-xt-drop="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-drop-element
        >
          card
        </button>

        <div class="xt-drop p-3 group" data-xt-drop-target>
          <div class="relative">
            <div
              class="*** xt-design *** rounded${classes.dropCardRadius()} shadow-drop bg-white ${animDesign()}"
            ></div>
            <div class="xt-card w-64 ${animItem()}">
              <button
                type="button"
                class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
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
          <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-white ${animItemOpacity()}"></div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Tooltip</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ duration: 500 }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          >
            tooltip
          </button>

          <div class="xt-tooltip p-3 group" data-xt-tooltip-target>
            <div class="relative">
              <div
                class="*** xt-design *** rounded${classes.tooltipRadius()} shadow-tooltip bg-black ${animDesign()}"
              ></div>
              <div class="relative ${classes.tooltipMd()} font-semibold text-white xt-links-inverse ${animItem()}">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-black ${animItemOpacity()}"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ duration: 500 }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          >
            Group
          </button>

          <div class="xt-tooltip p-3 group" data-xt-tooltip-target>
            <div class="relative">
              <div
                class="*** xt-design *** rounded${classes.tooltipRadius()} shadow-tooltip bg-white ${animDesign()}"
              ></div>
              <div class="font-semibold text-black xt-links-default ${animItem()}">
                <form class="text-sm">
                  <div class="xt-list flex-nowrap max-w-sm ${cardWhite()} ${animItem()}">
                    <div class="inline-flex flex-auto">
                      <button
                        type="button"
                        class="xt-button ${classes.buttonMd()} rounded-l${classes.groupRadius()} ${buttonDefault()}"
                      >
                        ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                      </button>
                      <input
                        type="text"
                        class="${classes.input()} ${classes.inputDefault()}"
                        aria-label="Search"
                        placeholder="Seach Catalog"
                      />
                    </div>

                    <button
                      type="button"
                      class="xt-button ${classes.buttonMd()} rounded-r${classes.groupRadius()} ${buttonPrimary()}"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black ${animItemOpacity()}"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Overlay</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Screen full
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-black transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container p-0">
            <button
              type="button"
              class="xt-button xt-dismiss fixed z-above top-0 right-0 p-5 text-2xl ${animItem()}"
              aria-label="Close"
            >
              ${classes.iconX()}
            </button>
            <div class="xt-overlay-inner">
              <div class="*** xt-design *** rounded${classes.cardRadius()} bg-white ${animDesign()}"></div>

              <div
                class="xt-card xt-min-h-screen items-center justify-center rounded${classes.cardRadius()} ${cardWhite()} ${animItem()}"
              >
                <div class="xt-media-container bg-gray-300 pb-[100%]">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Menu
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-black transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
            <div class="xt-overlay-inner">
              <div class="*** xt-design *** bg-white ${animDesign()}"></div>

              <div class="xt-card xt-min-h-screen ${cardWhite()} ${animItem()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="xt-list bg-primary-500">
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
                  >
                    Menu
                  </button>
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
                  >
                    Account
                  </button>
                </div>
                <div class="xt-media-container bg-gray-300 h-48">
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
                <div class="${classes.cardSm()} bg-gray-200 mt-auto">
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

      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Contact
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-black transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner">
              <div
                class="*** xt-design *** rounded${classes.overlayCardRadius()} md:rounded-tr-none shadow-overlay bg-white ${animDesign()}"
              ></div>

              <div class="xt-card rounded${classes.cardRadius()} ${cardWhite()} ${animItem()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl ${classes.buttonCloseOutside()} md:p-3 md:right-auto md:left-100"
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
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="md:w-5/12 flex flex-col">
                    <div class="xt-media-container bg-gray-300 h-48 md:pb-[100%]">
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                    </div>
                    <div
                      class="${classes.cardMd()} bg-gray-200 rounded-b${classes.cardRadius()} md:rounded-bl-none flex-full"
                    >
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

      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Newsletter
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-black transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner">
              <div
                class="*** xt-design *** rounded${classes.overlayCardRadius()} md:rounded-tr-none shadow-overlay bg-white ${animDesign()}"
              ></div>

              <div class="xt-card rounded${classes.cardRadius()} ${cardWhite()} ${animItem()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl ${classes.buttonCloseOutside()} md:p-3 md:right-auto md:left-100"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="md:xt-card-group">
                  <div class="md:w-5/12 flex flex-col">
                    <div
                      class="xt-media-container bg-gray-300 rounded-t${classes.cardRadius()} md:rounded-tr-none h-48 lg:pb-[100%] md:flex-full"
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
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="${classes.cardSm()} rounded-b${classes.cardRadius()} bg-gray-200">
                  <p>Receive <strong>free discount</strong> periodically on all our products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Card</div>

    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <button type="button" class="xt-card ${cardDefault()}">
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
        <button type="button" class="xt-card ${cardPrimary()}">
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
