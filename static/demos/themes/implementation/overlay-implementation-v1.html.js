const classes = require('src/gatsby/templates/snippets/classes').classes

const buttonPrimary = () => `${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}`
const cardWhite = () => `${classes.cardWhite()}`
const cardWhiteAccent = () => `${classes.cardWhiteAccent()}`

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Contact
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 *** transition opacity-0 group-in:opacity-25 ***"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner *** transition opacity-0 -translate-y-4 group-in:opacity-100 group-in:translate-y-0 group-out:translate-y-4 ***">
              <div
                class="xt-card rounded${classes.overlayRadius()} ${classes.overlayShadow()} ${classes.textBlack()} ${cardWhite()}"
              >
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
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
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="md:w-5/12 flex flex-col">
                    <div
                      class="xt-media-container bg-gray-300 h-48 md:pb-[100%] md:rounded-tr${classes.overlayRadius()} "
                    >
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                    </div>
                    <div
                      class="${classes.cardMd()} rounded-b${classes.overlayRadius()} md:rounded-bl-none ${cardWhiteAccent()} flex-auto"
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
          <div class="xt-backdrop z-below bg-gray-800 *** transition opacity-0 group-in:opacity-25 ***"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner *** transition opacity-0 -translate-y-4 group-in:opacity-100 group-in:translate-y-0 group-out:translate-y-4 ***">
              <div
                class="xt-card rounded${classes.overlayRadius()} ${classes.overlayShadow()} ${classes.textBlack()} ${cardWhite()}"
              >
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="md:xt-card-group">
                  <div class="md:w-5/12 flex flex-col">
                    <div
                      class="xt-media-container bg-gray-300 rounded-t${classes.overlayRadius()} md:rounded-tr-none h-48 lg:pb-[100%] md:flex-auto"
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
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="${classes.cardSm()} rounded-b${classes.overlayRadius()} ${cardWhiteAccent()}">
                  <p>Receive <strong>free discount</strong> periodically on all our products.</p>
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
          <div class="xt-backdrop z-below bg-gray-800 *** transition opacity-0 group-in:opacity-25 ***"></div>
          <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
            <div class="xt-overlay-inner *** transition opacity-0 -translate-y-4 group-in:opacity-100 group-in:translate-y-0 group-out:translate-y-4 ***">
              <div class="xt-card xt-min-h-screen ${classes.overlayShadow()} ${classes.textBlack()} ${cardWhite()}">
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
                <div class="${classes.cardSm()} ${cardWhiteAccent()} mt-auto">
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
          Gallery
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 *** transition opacity-0 group-in:opacity-25 ***"></div>
          <div class="xt-overlay-container p-0">
            <button
              type="button"
              class="xt-button xt-dismiss fixed z-above top-0 right-0 p-5 text-2xl"
              aria-label="Close"
            >
              ${classes.iconX()}
            </button>
            <div class="xt-overlay-inner *** transition opacity-0 -translate-y-4 group-in:opacity-100 group-in:translate-y-0 group-out:translate-y-4 ***">
              <div
                class="xt-card xt-min-h-screen items-center justify-center ${classes.overlayShadow()} ${classes.textBlack()} ${cardWhite()}"
              >
                <div class="xt-media-container bg-gray-300 pb-[100%]">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
  center: true,
  gradient: true,
}
