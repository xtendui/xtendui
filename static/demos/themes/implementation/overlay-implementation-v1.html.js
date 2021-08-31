const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-overlay-element
        >
          Contact
        </button>

        <div class="xt-overlay *** group ***" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 *** transition opacity-0 group-in:opacity-25 ***"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div
              class="xt-overlay-inner *** transition opacity-0 scale-95 group-in:opacity-100 group-in:scale-100 group-out:scale-105 ***"
            >
              <div
                class="xt-card rounded${classes.overlayRadius()} ${classes.overlayShadow()} ${classes.textDefault()} ${classes.cardWhite()}"
              >
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="*** md:xt-card-group ***">
                  <div class="md:w-7/12 *** ${classes.cardMd()}***">
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
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="md:w-5/12 *** flex flex-col ***">
                    <div
                      class="xt-media-container bg-gray-300 h-48 md:pb-[100%] md:rounded-tr${classes.overlayRadius()} "
                    >
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                    </div>
                    <div
                      class="*** ${classes.cardMd()} rounded-b${classes.overlayRadius()} md:rounded-bl-none ${classes.cardWhiteAccent()} flex-auto ***"
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
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-overlay-element
        >
          Newsletter
        </button>

        <div class="xt-overlay *** group ***" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 *** transition opacity-0 group-in:opacity-25 ***"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div
              class="xt-overlay-inner *** transition opacity-0 scale-95 group-in:opacity-100 group-in:scale-100 group-out:scale-105 ***"
            >
              <div
                class="xt-card rounded${classes.overlayRadius()} ${classes.overlayShadow()} ${classes.textDefault()} ${classes.cardWhite()}"
              >
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="*** md:xt-card-group ***">
                  <div class="md:w-5/12 *** flex flex-col ***">
                    <div
                      class="xt-media-container bg-gray-300 rounded-t${classes.overlayRadius()} md:rounded-tr-none h-48 lg:pb-[100%] md:flex-auto"
                    >
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                    </div>
                  </div>

                  <div class="md:w-7/12 *** ${classes.cardMd()} ***">
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
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  class="*** ${classes.cardSm()} rounded-b${classes.overlayRadius()} ${classes.cardWhiteAccent()} ***"
                >
                  <p>Subscribe and receive <strong>free discount</strong> periodically on all our products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-overlay-element
        >
          Menu
        </button>

        <div class="xt-overlay *** group ***" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 *** transition opacity-0 group-in:opacity-25 ***"></div>
          <div class="xt-overlay-container *** p-0 *** *** w-screen max-w-md ml-0 mr-auto ***">
            <div
              class="xt-overlay-inner *** transition opacity-0 scale-95 group-in:opacity-100 group-in:scale-100 group-out:scale-105 ***"
            >
              <div
                class="xt-card *** xt-min-h-screen *** ${classes.overlayShadow()} ${classes.textInverse()} ${classes.cardPrimary()}"
              >
                <div class="xt-list">
                  <form class="text-sm flex-auto">
                    <div class="xt-list flex-nowrap">
                      <div class="inline-flex flex-auto">
                        <button
                          type="submit"
                          class="xt-button ${classes.buttonMd()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                        >
                          ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                        </button>
                        <input
                          type="text"
                          class="${classes.input()} ${classes.inputGray()}"
                          aria-label="Search"
                          placeholder="Seach Catalog"
                        />
                        <button
                          type="button"
                          class="xt-button xt-dismiss p-3 text-2xl ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                          aria-label="Close"
                        >
                          ${classes.iconX()}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div
                  class="*** relative flex flex-col flex-auto ***"
                  data-xt-toggle="{ min: 1, duration: 500, queue: false }"
                >
                  <div
                    class="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
                    data-xt-toggle-target
                    data-xt-group="initial"
                  >
                    <div class="xt-h5 flex items-center justify-between">
                      <div>Collection</div>
                      <button type="button" class="hidden" data-xt-toggle-element data-xt-group="initial"></button>
                    </div>

                    <div class="-mx-3.5">
                      <nav class="xt-list xt-list-1 flex-col">
                        <button
                          type="button"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                          data-xt-toggle-element
                          data-xt-group="cat-0"
                        >
                          Man ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
                        </button>
                        <button
                          type="button"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                          data-xt-toggle-element
                          data-xt-group="cat-1"
                        >
                          Woman ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
                        </button>
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          Kid
                        </a>
                      </nav>
                    </div>

                    <div class="xt-h5 flex items-center justify-between">
                      <div>Company</div>
                    </div>

                    <div class="-mx-3.5">
                      <nav class="xt-list xt-list-1 flex-col">
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          About
                        </a>
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          News
                        </a>
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          Contact
                        </a>
                      </nav>
                    </div>
                  </div>

                  <div
                    class="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
                    data-xt-toggle-target
                    data-xt-group="cat-0"
                  >
                    <div class="xt-h5 flex items-center justify-between">
                      <div>Man</div>
                      <button
                        type="button"
                        class="xt-button -mr-3.5 ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                        data-xt-toggle-element
                        data-xt-group="initial"
                      >
                        ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
                      </button>
                    </div>

                    <div class="-mx-3.5">
                      <nav class="xt-list xt-list-1 flex-col">
                        <button
                          type="button"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                          data-xt-toggle-element
                          data-xt-group="cat-0a"
                        >
                          Shirt ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
                        </button>
                        <button
                          type="button"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                          data-xt-toggle-element
                          data-xt-group="cat-0b"
                        >
                          Pant ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
                        </button>
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          Jacket
                        </a>
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          Underwear
                        </a>
                      </nav>
                    </div>
                  </div>

                  <div
                    class="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
                    data-xt-toggle-target
                    data-xt-group="cat-0a"
                  >
                    <div class="xt-h5 flex items-center justify-between">
                      <div>Man Shirt</div>
                      <button
                        type="button"
                        class="xt-button -mr-3.5 ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                        data-xt-toggle-element
                        data-xt-group="cat-0"
                      >
                        ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
                      </button>
                    </div>

                    <div class="-mx-3.5">
                      <nav class="xt-list xt-list-1 flex-col">
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          T-Shirt
                        </a>
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          Polo
                        </a>
                      </nav>
                    </div>
                  </div>

                  <div
                    class="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
                    data-xt-toggle-target
                    data-xt-group="cat-0b"
                  >
                    <div class="xt-h5 flex items-center justify-between">
                      <div>Man Pant</div>
                      <button
                        type="button"
                        class="xt-button -mr-3.5 ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                        data-xt-toggle-element
                        data-xt-group="cat-0"
                      >
                        ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
                      </button>
                    </div>

                    <div class="-mx-3.5">
                      <nav class="xt-list xt-list-1 flex-col">
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          Jeans
                        </a>
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          Short
                        </a>
                      </nav>
                    </div>
                  </div>

                  <div
                    class="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
                    data-xt-toggle-target
                    data-xt-group="cat-1"
                  >
                    <div class="xt-h5 flex items-center justify-between">
                      <div>Woman</div>
                      <button
                        type="button"
                        class="xt-button -mr-3.5 ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                        data-xt-toggle-element
                        data-xt-group="initial"
                      >
                        ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
                      </button>
                    </div>

                    <div class="-mx-3.5">
                      <nav class="xt-list xt-list-1 flex-col">
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          Shirt
                        </a>
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          Pant
                        </a>
                      </nav>
                    </div>
                  </div>

                  <div
                    class="*** p-7 sm:p-9 text-base border-t border-primary-400 mt-auto *** *** off:hidden out:pointer-events-none *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
                    data-xt-toggle-target
                    data-xt-group="initial"
                  >
                    <div class="-mx-3.5">
                      <nav class="xt-list xt-list-1 flex-col">
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          Support ${classes.iconMail({ classes: 'xt-icon text-lg ml-4' })}
                        </a>
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          Login / Account ${classes.iconUsers({ classes: 'xt-icon text-lg ml-4' })}
                        </a>
                        <a
                          href="#"
                          class="xt-button w-full justify-between text-left ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}"
                        >
                          Language ${classes.iconGlobe({ classes: 'xt-icon text-lg ml-4' })}
                        </a>
                      </nav>
                    </div>
                  </div>
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
  gradient: true,
}
