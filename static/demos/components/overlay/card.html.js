const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-overlay-element
        >
          Contact
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-black opacity-25"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner">
              <div class="xt-card rounded${classes.overlayCardRadius()} shadow-overlay bg-white">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="*** md:xt-card-group ***">
                  <div class="*** ${classes.cardMd()} md:w-7/12 ***">
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
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="*** md:w-5/12 flex flex-col ***">
                    <div class="xt-media-container bg-gray-300 md:rounded-t${classes.cardRadius()} h-48 md:pb-[100%]">
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

      <div data-xt-overlay>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-overlay-element
        >
          Newsletter
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-black opacity-25"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner">
              <div
                class="xt-card rounded${classes.cardRadius()} rounded${classes.overlayCardRadius()} shadow-overlay bg-white"
              >
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="*** md:xt-card-group ***">
                  <div class="*** md:w-5/12 flex flex-col ***">
                    <div
                      class="xt-media-container bg-gray-300 rounded-t${classes.cardRadius()} md:rounded-tr-none h-48 lg:pb-[100%] md:flex-full"
                    >
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                    </div>
                  </div>

                  <div class="*** ${classes.cardMd()} md:w-7/12 ***">
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
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="*** ${classes.cardSm()} rounded-b${classes.cardRadius()} bg-gray-200 ***">
                  <p>Receive <strong>free discount</strong> periodically on all our products.</p>
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
}
