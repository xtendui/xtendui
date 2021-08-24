const classes = require('src/gatsby/templates/snippets/classes').classes

const designAnim = () =>
  'overflow-hidden transition-all -translate-y-4 group-in:transition-all group-in:duration-300 group-in:translate-y-0 group-out:transition-all group-out:duration-500 group-out:ease-in-out-quint group-out:-translate-y-2'
const itemAnim = () =>
  'opacity-0 -translate-y-2 group-in:transition group-in:duration-300 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2'
const itemAnimWidth = () =>
  'opacity-0 -translate-x-2 group-in:transition group-in:duration-300 group-in:delay-200 group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-x-2'
const itemAnimOpacity = () =>
  'opacity-0 transition-opacity duration-300 ease-in-out-quint group-in:delay-200 group-in:ease-out-quint group-in:opacity-100'

const buttonGray = () => `${classes.buttonGray()} ${classes.buttonGrayAnim()}`
const buttonPrimary = () => `${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}`

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()}">Toggle</div>

    <form class="text-sm">
      <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ collapseWidth: 'targets', duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-toggle-element
        >
          Group
        </button>

        <div
          class="*** off:hidden out:pointer-events-none ** max-w-sm *** overflow-hidden transition-all *** *** group ***"
          data-xt-toggle-target
        >
          <div class="xt-list flex-nowrap *** ${itemAnimWidth()} ***">
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
              class="xt-button ${classes.buttonMd()} rounded-r${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>

    <div class="${classes.hBlock()}">Drop</div>

    <div class="xt-list xt-list-3 items-center">
      <div
        data-xt-drop="{ targetsInner: '[data-xt-drop-inner]', collapseHeight: 'targetsInner', position: 'auto-end', duration: 500 }"
      >
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element
        >
          Nav
        </button>
        <div class="xt-drop p-3 *** group ***" data-xt-drop-target>
          <div
            class="xt-card w-60 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textInverse()} ${classes.cardPrimary()} *** ${designAnim()} ***"
            data-xt-drop-inner
          >
            <nav class="xt-list flex-col ${classes.groupMd()} *** ${itemAnim()} ***">
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()}"
              >
                ${classes.iconFile({ classes: 'xt-icon text-lg opacity-50 mr-2' })} Description
              </a>
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()}"
              >
                ${classes.iconFiletext({ classes: 'xt-icon text-lg opacity-50 mr-2' })} Features
              </a>
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()}"
              >
                ${classes.iconPackage({ classes: 'xt-icon text-lg opacity-50 mr-2' })} Accessories
              </a>
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()}"
              >
                ${classes.iconDownload({ classes: 'xt-icon text-lg opacity-50 mr-2' })} Manuals
              </a>
            </nav>
          </div>
          <div
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-primary-500 *** ${itemAnimOpacity()} group-in:opacity-100 ***"
          ></div>
        </div>
      </div>

      <div
        data-xt-drop="{ targetsInner: '[data-xt-drop-inner]', collapseHeight: 'targetsInner', position: 'auto-end', duration: 500 }"
      >
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element
        >
          Contact
        </button>
        <div class="xt-drop p-3 *** group ***" data-xt-drop-target>
          <div
            class="xt-card w-80 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()} *** ${designAnim()} ***"
            data-xt-drop-inner
          >
            <nav class="xt-list xt-list-1 flex-col py-2 *** ${itemAnim()} ***">
              <a href="#" class="xt-button ${classes.groupButtonMd()} ${classes.buttonTextAnim()}">
                <div class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
                  <div class="p-2 bg-primary-100 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
                    ${classes.iconMail({ classes: 'xt-icon text-2xl text-primary-500' })}
                  </div>
                  <div>
                    <div class="font-medium">Email Us</div>
                    <div class="text-xs opacity-50">We'll respond within 24 hours.</div>
                  </div>
                </div>
              </a>
              <a href="#" class="xt-button ${classes.groupButtonMd()} ${classes.buttonTextAnim()}">
                <div class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
                  <div class="p-2 bg-primary-100 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
                    ${classes.iconPhone({ classes: 'xt-icon text-2xl text-primary-500' })}
                  </div>
                  <div>
                    <div class="font-medium">Phone</div>
                    <div class="text-xs opacity-50">Contact us on 24/7 support line.</div>
                  </div>
                </div>
              </a>
              <a href="#" class="xt-button ${classes.groupButtonMd()} ${classes.buttonTextAnim()}">
                <div class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
                  <div class="p-2 bg-primary-100 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
                    ${classes.iconUsers({ classes: 'xt-icon text-2xl text-primary-500' })}
                  </div>
                  <div>
                    <div class="font-medium">Support</div>
                    <div class="text-xs opacity-50">Open a ticket on our support site.</div>
                  </div>
                </div>
              </a>
            </nav>
            <div
              class="p-5 text-xs rounded-b${classes.dropRadius()} ${classes.cardWhiteAccent()} flex-auto  *** ${itemAnim()} ***"
            >
              <p class="mb-1 font-bold text-sm">Didn&apos;t find what you was looking for?</p>
              <p>
                Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at
                <a href="mailto:info@info.com">info@info.com</a>.
              </p>
            </div>
          </div>
          <div
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** ${itemAnimOpacity()} group-in:opacity-100 ***"
          ></div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()}">Tooltip</div>

    <div data-xt-tooltip="{ targetsInner: '[data-xt-tooltip-inner]', collapseHeight: 'targetsInner', duration: 500 }">
      Example tooltips
      <span data-xt-tooltip-element>
        <a href="#">product informations</a>

        <div class="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
          <div
            class="xt-card w-80 rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()} *** ${designAnim()} ***"
            data-xt-tooltip-inner
          >
            <div class="xt-list xt-list-1 flex-col py-2 *** ${itemAnim()} ***">
              <div>
                <div
                  class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap ${classes.groupButtonMd()}"
                >
                  <div class="p-2 bg-primary-800 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
                    ${classes.iconInfo({ classes: 'xt-icon text-2xl text-primary-500' })}
                  </div>
                  <div>
                    <div class="font-medium">Shipping Limits</div>
                    <div class="text-xs opacity-50">Delivery is EU and US only.</div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap ${classes.groupButtonMd()}"
                >
                  <div class="p-2 bg-primary-800 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
                    ${classes.iconAlerttriangle({ classes: 'xt-icon text-2xl text-primary-500' })}
                  </div>
                  <div>
                    <div class="font-medium">VAT Excluded</div>
                    <div class="text-xs opacity-50">The prices is excluding VAT.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black *** ${itemAnimOpacity()} group-in:opacity-100 ***"
          ></div>
        </div>
      </span>
      and
      <span data-xt-tooltip-element>
        <a href="#">credit card CVV</a>

        <div class="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
          <div
            class="xt-card w-80 rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textDefault()} ${classes.cardWhite()} *** ${designAnim()} ***"
            data-xt-tooltip-inner
          >
            <div class="xt-media-container bg-gray-300 rounded-t${classes.tooltipRadius()} h-32 *** ${itemAnim()} ***">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
            <div>
              <div
                class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap ${classes.groupButtonMd()} *** ${itemAnim()} ***"
              >
                <div class="p-2 bg-primary-100 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
                  ${classes.iconCreditcard({ classes: 'xt-icon text-2xl text-primary-500' })}
                </div>
                <div class="text-xs">
                  The card security code is the three-digit number at the back of your debit card.
                </div>
              </div>
            </div>
          </div>
          <div
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** ${itemAnimOpacity()} group-in:opacity-100 ***"
          ></div>
        </div>
      </span>
    </div>

    <div class="${classes.hBlock()}">Overlay</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay="{ targetsInner: '[data-xt-overlay-inner]', collapseHeight: 'targetsInner', duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Contact
        </button>

        <div class="xt-overlay *** group ***" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 *** ${itemAnimOpacity()} group-in:opacity-25 ***"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div
              class="xt-overlay-inner rounded${classes.overlayRadius()} ${classes.overlayShadow()} *** ${designAnim()} ***"
              data-xt-overlay-inner
            >
              <div class="xt-card rounded${classes.overlayRadius()} ${classes.textDefault()} ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="md:xt-card-group rounded${classes.overlayRadius()} *** ${itemAnim()} ***">
                  <div class="md:w-7/12 ${classes.cardMd()}">
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

                  <div class="md:w-5/12 flex flex-col *** ${itemAnim()} ***">
                    <div
                      class="xt-media-container bg-gray-300 md:rounded-tr${classes.overlayRadius()} h-48 md:pb-[100%]"
                    >
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                    </div>
                    <div
                      class="${classes.cardMd()} rounded-b${classes.overlayRadius()} md:rounded-bl-none ${classes.cardWhiteAccent()} flex-auto"
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

      <div data-xt-overlay="{ targetsInner: '[data-xt-overlay-inner]', collapseHeight: 'targetsInner', duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Newsletter
        </button>

        <div class="xt-overlay *** group ***" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 *** ${itemAnimOpacity()} group-in:opacity-25 ***"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div
              class="xt-overlay-inner rounded${classes.overlayRadius()} ${classes.overlayShadow()} *** ${designAnim()} ***"
              data-xt-overlay-inner
            >
              <div class="xt-card rounded${classes.overlayRadius()} ${classes.textDefault()} ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="md:xt-card-group rounded${classes.overlayRadius()} *** ${itemAnim()} ***">
                  <div class="md:w-5/12 flex flex-col">
                    <div
                      class="xt-media-container bg-gray-300 rounded-t${classes.overlayRadius()} md:rounded-tr-none h-48 lg:pb-[100%] md:flex-auto"
                    >
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                    </div>
                  </div>

                  <div class="md:w-7/12 ${classes.cardMd()}">
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

                <div
                  class="${classes.cardSm()} rounded-b${classes.overlayRadius()} ${classes.cardWhiteAccent()} *** ${itemAnim()} ***"
                >
                  <p>Subscribe and receive <strong>free discount</strong> periodically on all our products.</p>
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
}
