const classes = require('src/gatsby/templates/snippets/classes').classes

const transparentAnim = () =>
  '*** transition hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md on:bg-gray-300 on:translate-y-0 on:shadow-md ***'
const grayDesign = () => 'text-black bg-gray-100 border-transparent border'
const grayAnim = () =>
  '*** transition hover:bg-gray-200 hover:border-gray-300 hover:-translate-y-1 hover:shadow-lg active:bg-gray-300 active:translate-y-0 active:shadow-md on:bg-gray-300 on:translate-y-0 on:shadow-md ***'
const primaryDesign = () => 'text-white bg-primary-500 border-transparent border'
const primaryAnim = () =>
  '*** transition hover:text-white hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:text-white active:bg-primary-700 active:translate-y-0 active:shadow-md on:text-white on:bg-primary-700 on:translate-y-0 on:shadow-md ***'
const designAnim = () =>
  '*** opacity-0 scale-50 group-in:transition group-in:duration-500 group-in:opacity-100 group-in:scale-100 group-out:transition group-out:duration-300 group-out:delay-200 group-out:ease-in-out-quint ***'
const itemAnim = () =>
  '*** opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2 ***'
const itemAnimOpacity = () =>
  '*** opacity-0 transition-opacity duration-300 ease-in-out-quint group-in:delay-200 group-in:ease-out-quint group-in:opacity-100 ***'

const buttonGray = () => `${grayDesign()} ${grayAnim()}`
const buttonPrimary = () => `${primaryDesign()} ${primaryAnim()}`
const buttonGrayPrimary = () => `${classes.buttonGray()} ${primaryAnim()}`
const buttonRing = () => `${classes.buttonRing()} ${classes.buttonRingAnim()}`
const cardGray = () => `${classes.cardGray()}`
const cardPrimary = () => `${classes.cardPrimary()}`
const cardWhite = () => `${classes.cardWhite()}`
const cardBlack = () => `${classes.cardBlack()}`

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Button</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonGray()}"
      >
        Gray
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
      >
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonGrayPrimary()} ${transparentAnim()}"
      >
        Gray Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonRing()} ${transparentAnim()}"
      >
        Ring
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} text-black ${transparentAnim()}"
      >
        Text
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} xt-link ${transparentAnim()}"
      >
        Link
      </button>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Drop</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-drop-element
        >
          Drop
        </button>

        <div class="xt-drop p-3 group" data-xt-drop-target>
          <div class="relative">
            <div
              class="*** xt-design *** rounded${classes.dropCardRadius()} shadow-drop rounded${classes.cardRadius()} ${cardGray()} ${designAnim()}"
            ></div>
            <div class="xt-card w-64 ${classes.textBlack()} ${itemAnim()}">
              <nav class="xt-list flex-col ${classes.groupMd()}">
                <a
                  href="#"
                  class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
                >
                  Dolor sit
                </button>
                <button
                  type="button"
                  class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
                >
                  Amet
                </button>
              </nav>
            </div>
          </div>
          <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-gray-100 ${itemAnimOpacity()}"></div>
        </div>
      </div>

      <div data-xt-drop="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-drop-element
        >
          Card
        </button>

        <div class="xt-drop p-3 group" data-xt-drop-target>
          <div class="relative">
            <div
              class="*** xt-design *** rounded${classes.dropCardRadius()} shadow-drop rounded${classes.cardRadius()} ${cardGray()} ${designAnim()}"
            ></div>
            <div class="xt-card w-64 ${classes.textBlack()} ${itemAnim()}">
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
          <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-gray-100 ${itemAnimOpacity()}"></div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Tooltip</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ duration: 500 }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          >
            Tooltip
          </button>

          <div class="xt-tooltip p-3 group" data-xt-tooltip-target>
            <div class="relative">
              <div
                class="*** xt-design *** rounded${classes.tooltipRadius()} shadow-tooltip ${cardBlack()} ${designAnim()}"
              ></div>
              <div class="relative ${classes.tooltipMd()} font-medium text-white xt-links-inverse ${itemAnim()}">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black ${itemAnimOpacity()}"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ duration: 500 }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          >
            Group
          </button>

          <div class="xt-tooltip p-3 group" data-xt-tooltip-target>
            <div class="relative">
              <div
                class="*** xt-design *** rounded${classes.tooltipRadius()} shadow-tooltip rounded${classes.cardRadius()} ${cardGray()} ${designAnim()}"
              ></div>
              <div class="${classes.textBlack()} xt-links-default ${itemAnim()}">
                <form class="text-sm">
                  <div class="xt-list flex-nowrap max-w-sm ${itemAnim()}">
                    <div class="inline-flex flex-auto">
                      <button
                        type="button"
                        class="xt-button ${classes.buttonMd()} rounded-l${classes.groupButtonRadius()} ${classes.buttonUpper()} ${buttonGray()}"
                      >
                        ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                      </button>
                      <input
                        type="text"
                        class="${classes.input()} ${classes.inputGray()}"
                        aria-label="Search"
                        placeholder="Seach Catalog"
                      />
                    </div>

                    <button
                      type="button"
                      class="xt-button ${classes.buttonMd()} rounded-r${classes.groupButtonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black ${itemAnimOpacity()}"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Overlay</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Gallery
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-black transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container p-0">
            <button
              type="button"
              class="xt-button xt-dismiss fixed z-above top-0 right-0 p-5 text-2xl ${itemAnim()}"
              aria-label="Close"
            >
              ${classes.iconX()}
            </button>
            <div class="xt-overlay-inner">
              <div class="*** xt-design *** ${cardWhite()} ${designAnim()}"></div>

              <div class="xt-card xt-min-h-screen items-center justify-center ${classes.textBlack()} ${itemAnim()}">
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
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Menu
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-black transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
            <div class="xt-overlay-inner">
              <div class="*** xt-design *** ${cardWhite()} ${designAnim()}"></div>

              <div class="xt-card xt-min-h-screen ${classes.textBlack()} ${itemAnim()}">
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
                    class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
                  >
                    Menu
                  </button>
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
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
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Contact
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-black transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner">
              <div
                class="*** xt-design *** rounded${classes.overlayCardRadius()} md:rounded-tr-none shadow-overlay ${cardWhite()} ${designAnim()}"
              ></div>

              <div class="xt-card rounded${classes.overlayCardRadius()} ${classes.textBlack()} ${itemAnim()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl ${classes.buttonCloseOutsideAnim()} md:p-3 md:right-auto md:left-100"
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
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Name </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Name"
                          />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Surname </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Surname"
                          />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Email </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Email"
                          />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Telephone </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Telephone"
                          />
                        </div>

                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Subject </label>
                          <select
                            class="${classes.input()} xt-select ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Subject"
                          >
                            <option selected value="">Select an option</option>
                            <option>Test</option>
                            <option>Test</option>
                            <option>Test</option>
                          </select>
                        </div>

                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Message </label>
                          <textarea
                            class="${classes.input()} ${classes.textarea()} ${classes.inputRadius()} ${classes.inputGray()} h-24 resize-vertical"
                            aria-label="Message"
                          ></textarea>
                        </div>

                        <div class="w-full">
                          <label class="${classes.checkLabel()}">
                            <input
                              type="checkbox"
                              class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}"
                            />
                            <span class="${classes.checkContent()}">
                              I <strong>read and accept</strong> the
                              <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                            </span>
                          </label>
                        </div>

                        <div class="w-full">
                          <button
                            type="submit"
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
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
                      class="${classes.cardMd()} bg-gray-200 rounded-b${classes.overlayCardRadius()} md:rounded-bl-none flex-auto"
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
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Newsletter
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-black transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner">
              <div
                class="*** xt-design *** rounded${classes.overlayCardRadius()} md:rounded-tr-none shadow-overlay ${cardWhite()} ${designAnim()}"
              ></div>

              <div class="xt-card rounded${classes.overlayCardRadius()} ${classes.textBlack()} ${itemAnim()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl ${classes.buttonCloseOutsideAnim()} md:p-3 md:right-auto md:left-100"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="md:xt-card-group">
                  <div class="md:w-5/12 flex flex-col">
                    <div
                      class="xt-media-container bg-gray-300 rounded-t${classes.overlayCardRadius()} md:rounded-tr-none h-48 lg:pb-[100%] md:flex-auto"
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
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Email </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Email"
                          />
                        </div>

                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Subject </label>

                          <div class="xt-row xt-row-x-8 xt-row-y-2">
                            <div class="w-full sm:w-auto">
                              <label class="${classes.checkLabel()}">
                                <input
                                  type="radio"
                                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
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
                                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                                  name="radio-usage"
                                />
                                <span class="${classes.checkContent()}"> Option 2 </span>
                              </label>
                            </div>

                            <div class="w-full sm:w-auto">
                              <label class="${classes.checkLabel()}">
                                <input
                                  type="radio"
                                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
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
                              class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}"
                            />
                            <span class="${classes.checkContent()}">
                              I <strong>read and accept</strong> the
                              <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                            </span>
                          </label>
                        </div>

                        <div class="w-full">
                          <button
                            type="submit"
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="${classes.cardSm()} rounded-b${classes.overlayCardRadius()} bg-gray-200">
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
        <button
          type="button"
          class="xt-card rounded${classes.cardRadius()} rounded${classes.cardRadius()} ${classes.textBlack()} ${cardGray()} ${grayAnim()}"
        >
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
          class="xt-card rounded${classes.cardRadius()} rounded${classes.cardRadius()} ${classes.textWhite()} ${cardPrimary()} ${primaryAnim()}"
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
