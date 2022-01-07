const classes = require('src/gatsby/templates/snippets/classes').classes

const designAnim = () =>
  'opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4'
const itemAnim = () =>
  'opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4'
const itemAnimNogroup = () =>
  'opacity-0 translate-y-2/4 in:transition in:duration-500 in:ease-out-cubic in:opacity-100 in:translate-y-0 out:transition out:duration-300 out:ease-in-out-cubic out:translate-y-1/4'
const itemAnimOpacity = () =>
  'opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint'

const buttonGray = () => `${classes.buttonGray()} ${classes.buttonGrayAnim()}`
const buttonPrimary = () => `${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}`
const buttonText = () => `${classes.buttonTextAnim()}`
const buttonGroupPrimary = () => `${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()}`

const html = /* HTML */ `
  <div class="demo--slide-animation-v1">
    <div class="${classes.hBlock()}">Button</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonGray()}">
        Gray
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}">
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonUpper()} ${buttonText()}">
        Text
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} xt-link">
        Link
      </button>
    </div>

    <div class="${classes.hBlock()}">Toggle</div>

    <form class="text-sm">
      <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-toggle-element>
          Group
        </button>

        <div class="*** off:hidden out:pointer-events-none *** max-w-sm *** group ***" data-xt-toggle-target>
          <div class="*** ${designAnim()} ***">
            <div class="xt-list flex-nowrap *** ${itemAnim()} ***">
              <div class="inline-flex flex-auto">
                <button
                  type="submit"
                  class="xt-button ${classes.buttonMd()} rounded-l${classes.groupButtonRadius()} ${buttonGray()}">
                  ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                </button>
                <input
                  type="text"
                  class="${classes.input()} ${classes.inputGray()}"
                  aria-label="Search"
                  placeholder="Seach Catalog" />
              </div>

              <button
                type="submit"
                class="xt-button ${classes.buttonMd()} rounded-r${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="${classes.hBlock()}">Drop</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop="{ position: 'auto-end', duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element>
          Nav
        </button>
        <div class="xt-drop p-3 *** group ***" data-xt-drop-target>
          <div
            class="xt-card w-60 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textInverse()} ${classes.cardPrimary()} *** ${designAnim()} ***">
            <nav aria-label="Drop" class="xt-list flex-col ${classes.groupMd()} *** ${itemAnim()} ***">
              <a
                href="/"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${buttonGroupPrimary()}">
                ${classes.iconFile({ classes: 'xt-icon text-lg opacity-50 mr-2' })} Description
              </a>
              <a
                href="/"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${buttonGroupPrimary()}">
                ${classes.iconFiletext({ classes: 'xt-icon text-lg opacity-50 mr-2' })} Features
              </a>
              <a
                href="/"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${buttonGroupPrimary()}">
                ${classes.iconPackage({ classes: 'xt-icon text-lg opacity-50 mr-2' })} Accessories
              </a>
              <a
                href="/"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${buttonGroupPrimary()}">
                ${classes.iconDownload({ classes: 'xt-icon text-lg opacity-50 mr-2' })} Manuals
              </a>
            </nav>
          </div>
          <div
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-primary-500 *** *** ${itemAnimOpacity()} group-in:opacity-100 *** ***"></div>
        </div>
      </div>

      <div data-xt-drop="{ position: 'auto-end', duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element>
          Contact
        </button>
        <div class="xt-drop p-3 *** group ***" data-xt-drop-target>
          <div
            class="xt-card w-80 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()} *** ${designAnim()} ***">
            <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col py-2 *** ${itemAnim()} ***">
              <a href="/" class="xt-button ${classes.groupButtonMd()} ${buttonText()}">
                <div class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
                  <div class="p-2 bg-primary-100 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
                    ${classes.iconMail({ classes: 'xt-icon text-2xl text-primary-500' })}
                  </div>
                  <div>
                    <div class="font-medium">Email Us</div>
                    <div class="text-xs opacity-50">We&apos;ll respond within 24 hours.</div>
                  </div>
                </div>
              </a>
              <a href="/" class="xt-button ${classes.groupButtonMd()} ${buttonText()}">
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
              <a href="/" class="xt-button ${classes.groupButtonMd()} ${buttonText()}">
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
              class="p-5 text-xs rounded-b${classes.dropRadius()} ${classes.cardWhiteAccent()} flex-auto  *** ${itemAnim()} ***">
              <p class="mb-1 font-bold text-sm">Didn&apos;t find what you was looking for?</p>
              <p>
                Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at
                <a href="mailto:info@info.com">info@info.com</a>.
              </p>
            </div>
          </div>
          <div
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** *** ${itemAnimOpacity()} group-in:opacity-100 *** ***"></div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()}">Tooltip</div>

    <div data-xt-tooltip="{ mouseParent: true, duration: 500 }">
      Example tooltips

      <span>
        <a href="/" data-xt-tooltip-element>product informations</a>

        <div class="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
          <div
            class="xt-card w-80 rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} *** ${designAnim()} ***">
            <div class="xt-list xt-list-1 flex-col py-2 *** ${itemAnim()} ***">
              <div>
                <div
                  class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap ${classes.groupButtonMd()}">
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
                  class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap ${classes.groupButtonMd()}">
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
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black *** *** ${itemAnimOpacity()} group-in:opacity-100 *** ***"></div>
        </div>
      </span>

      and

      <span>
        <a href="/" data-xt-tooltip-element>credit card CVV</a>

        <div class="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
          <div
            class="xt-card w-80 rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textDefault()} ${classes.cardWhite()} *** ${designAnim()} ***">
            <div class="xt-media-container bg-gray-200 rounded-t${classes.tooltipRadius()} h-32 *** ${itemAnim()} ***">
              <img class="xt-media object-cover" src="/img.svg" loading="lazy" alt="" />
            </div>
            <div>
              <div
                class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap ${classes.groupButtonMd()} *** ${itemAnim()} ***">
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
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** *** ${itemAnimOpacity()} group-in:opacity-100 *** ***"></div>
        </div>
      </span>
    </div>

    <div class="${classes.hBlock()}">Overlay</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-overlay-element>
          Contact
        </button>

        <div aria-label="Modal" class="xt-overlay *** group ***" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 *** ${itemAnimOpacity()} group-in:opacity-25 ***"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner">
              <div
                class="xt-card rounded${classes.overlayRadius()} ${classes.overlayShadow()} ${classes.textDefault()} ${classes.cardWhite()} *** ${designAnim()} ***">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close">
                  ${classes.iconX()}
                </button>

                <div class="*** md:xt-card-group rounded${classes.overlayRadius()} *** *** ${itemAnim()} ***">
                  <div class="md:w-7/12 *** ${classes.cardMd()} ***">
                    <div class="xt-h4">Contact us</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                    <form class="text-sm">
                      <div class="xt-row xt-row-x-6 xt-row-y-4">
                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Name </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Name" />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Surname </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Surname" />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Email </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Email" />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Telephone </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Telephone" />
                        </div>

                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Subject </label>
                          <select
                            class="${classes.input()} xt-select ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Subject">
                            <option selected value="">Select an option</option>
                            <option>Test</option>
                            <option>Test</option>
                            <option>Test</option>
                          </select>
                        </div>

                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Message </label>
                          <textarea
                            class="${classes.input()} ${classes.textarea()} ${classes.inputRadius()} ${classes.inputGray()} resize-vertical"
                            aria-label="Message"></textarea>
                        </div>

                        <div class="w-full">
                          <label class="${classes.checkLabel()}">
                            <input
                              type="checkbox"
                              role="group"
                              aria-label="privacy policy"
                              class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}" />
                            <span class="${classes.checkContent()}">
                              I <strong>read and accept</strong> the
                              <a href="/" target="_blank" rel="noopener">privacy policy</a>.
                            </span>
                          </label>
                        </div>

                        <div class="w-full">
                          <button
                            type="submit"
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}">
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="md:w-5/12 *** flex flex-col *** *** ${itemAnim()} ***">
                    <div
                      class="xt-media-container bg-gray-200 md:rounded-tr${classes.overlayRadius()} h-48 md:pb-[100%]">
                      <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
                    </div>
                    <div
                      class="*** ${classes.cardMd()} rounded-b${classes.overlayRadius()} md:rounded-bl-none ${classes.cardWhiteAccent()} flex-auto ***">
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
          data-xt-overlay-element>
          Newsletter
        </button>

        <div aria-label="Modal" class="xt-overlay *** group ***" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 *** ${itemAnimOpacity()} group-in:opacity-25 ***"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner">
              <div
                class="xt-card rounded${classes.overlayRadius()} ${classes.overlayShadow()} ${classes.textDefault()} ${classes.cardWhite()} *** ${designAnim()} ***">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close">
                  ${classes.iconX()}
                </button>

                <div class="*** md:xt-card-group rounded${classes.overlayRadius()} *** *** ${itemAnim()} ***">
                  <div class="md:w-5/12 *** flex flex-col ***">
                    <div
                      class="xt-media-container bg-gray-200 rounded-t${classes.overlayRadius()} md:rounded-tr-none h-48 lg:pb-[100%] md:flex-auto">
                      <img class="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
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
                            aria-label="Email" />
                        </div>

                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Subject </label>

                          <div class="xt-row xt-row-x-8 xt-row-y-2">
                            <div class="w-full sm:w-auto">
                              <label class="${classes.checkLabel()}">
                                <input
                                  type="radio"
                                  role="radiogroup"
                                  aria-label="Option 1"
                                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                                  name="radio-usage"
                                  checked />
                                <span class="${classes.checkContent()}"> Option 1 </span>
                              </label>
                            </div>

                            <div class="w-full sm:w-auto">
                              <label class="${classes.checkLabel()}">
                                <input
                                  type="radio"
                                  role="radiogroup"
                                  aria-label="Option 2"
                                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                                  name="radio-usage" />
                                <span class="${classes.checkContent()}"> Option 2 </span>
                              </label>
                            </div>

                            <div class="w-full sm:w-auto">
                              <label class="${classes.checkLabel()}">
                                <input
                                  type="radio"
                                  role="radiogroup"
                                  aria-label="Option 3"
                                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                                  name="radio-usage" />
                                <span class="${classes.checkContent()}"> Option 3 </span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="w-full">
                          <label class="${classes.checkLabel()}">
                            <input
                              type="checkbox"
                              role="group"
                              aria-label="privacy policy"
                              class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}" />
                            <span class="${classes.checkContent()}">
                              I <strong>read and accept</strong> the
                              <a href="/" target="_blank" rel="noopener">privacy policy</a>.
                            </span>
                          </label>
                        </div>

                        <div class="w-full">
                          <button
                            type="submit"
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  class="${classes.cardSm()} rounded-b${classes.overlayRadius()} ${classes.cardWhiteAccent()} *** ${itemAnim()} ***">
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
          data-xt-overlay-element>
          Menu
        </button>

        <div aria-label="Modal" class="xt-overlay *** group ***" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 *** ${itemAnimOpacity()} group-in:opacity-25 ***"></div>
          <div class="xt-overlay-container *** p-0 *** *** w-screen max-w-md ml-0 mr-auto ***">
            <div class="xt-overlay-inner">
              <div
                class="xt-card ${classes.overlayShadow()} ${classes.textInverse()} ${classes.cardBlack()} *** ${designAnim()} ***">
                <div class="*** min-h-screen ***">
                  <div class="xt-list *** ${itemAnim()} ***">
                    <form class="text-sm flex-auto">
                      <div class="xt-list flex-nowrap">
                        <div class="inline-flex flex-auto">
                          <button
                            type="submit"
                            class="xt-button ${classes.buttonMd()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
                            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                          </button>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputGray()}"
                            aria-label="Search"
                            placeholder="Seach Catalog" />
                          <button
                            type="button"
                            class="xt-button xt-dismiss p-3 text-2xl ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                            aria-label="Close">
                            ${classes.iconX()}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div
                    class="*** relative flex flex-col flex-auto *** *** ${itemAnim()} ***"
                    data-xt-toggle="{ min: 1, duration: 500, queue: false }">
                    <div
                      class="*** flex flex-col flex-auto h-full py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** ${itemAnimNogroup()} ***"
                      data-xt-toggle-target
                      data-xt-group="initial">
                      <div class="xt-h5 flex items-center justify-between">
                        <div>Collection</div>
                        <button type="button" class="hidden" data-xt-toggle-element data-xt-group="initial"></button>
                      </div>

                      <div class="-mx-3.5">
                        <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col">
                          <button
                            type="button"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}"
                            data-xt-toggle-element
                            data-xt-group="cat-0">
                            Man ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
                          </button>
                          <button
                            type="button"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}"
                            data-xt-toggle-element
                            data-xt-group="cat-1">
                            Woman ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
                          </button>
                          <a
                            href="/"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                            Kid
                          </a>
                        </nav>
                      </div>

                      <div class="xt-h5 flex items-center justify-between">
                        <div>Company</div>
                      </div>

                      <div class="-mx-3.5">
                        <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col">
                          <a
                            href="/"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                            About
                          </a>
                          <a
                            href="/"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                            News
                          </a>
                          <a
                            href="/"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                            Contact
                          </a>
                        </nav>
                      </div>

                      <div class="mt-auto">
                        <div class="-mx-3.5 mt-6 pt-6 border-t border-white border-opacity-20">
                          <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col">
                            <a
                              href="/"
                              class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                              Support ${classes.iconMail({ classes: 'xt-icon text-lg ml-4' })}
                            </a>
                            <a
                              href="/"
                              class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                              Login / Account ${classes.iconUsers({ classes: 'xt-icon text-lg ml-4' })}
                            </a>
                            <a
                              href="/"
                              class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                              Language ${classes.iconGlobe({ classes: 'xt-icon text-lg ml-4' })}
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>

                    <div
                      class="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** ${itemAnimNogroup()} ***"
                      data-xt-toggle-target
                      data-xt-group="cat-0">
                      <div class="xt-h5 flex items-center justify-between">
                        <div>Man</div>
                        <button
                          type="button"
                          class="xt-button -mr-3.5 ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonTextAnim()}"
                          data-xt-toggle-element
                          data-xt-group="initial">
                          ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
                        </button>
                      </div>

                      <div class="-mx-3.5">
                        <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col">
                          <button
                            type="button"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}"
                            data-xt-toggle-element
                            data-xt-group="cat-0a">
                            Shirt ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
                          </button>
                          <button
                            type="button"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}"
                            data-xt-toggle-element
                            data-xt-group="cat-0b">
                            Pant ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
                          </button>
                          <a
                            href="/"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                            Jacket
                          </a>
                          <a
                            href="/"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                            Underwear
                          </a>
                        </nav>
                      </div>
                    </div>

                    <div
                      class="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** ${itemAnimNogroup()} ***"
                      data-xt-toggle-target
                      data-xt-group="cat-0a">
                      <div class="xt-h5 flex items-center justify-between">
                        <div>Man Shirt</div>
                        <button
                          type="button"
                          class="xt-button -mr-3.5 ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonTextAnim()}"
                          data-xt-toggle-element
                          data-xt-group="cat-0">
                          ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
                        </button>
                      </div>

                      <div class="-mx-3.5">
                        <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col">
                          <a
                            href="/"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                            T-Shirt
                          </a>
                          <a
                            href="/"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                            Polo
                          </a>
                        </nav>
                      </div>
                    </div>

                    <div
                      class="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** ${itemAnimNogroup()} ***"
                      data-xt-toggle-target
                      data-xt-group="cat-0b">
                      <div class="xt-h5 flex items-center justify-between">
                        <div>Man Pant</div>
                        <button
                          type="button"
                          class="xt-button -mr-3.5 ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonTextAnim()}"
                          data-xt-toggle-element
                          data-xt-group="cat-0">
                          ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
                        </button>
                      </div>

                      <div class="-mx-3.5">
                        <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col">
                          <a
                            href="/"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                            Jeans
                          </a>
                          <a
                            href="/"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                            Short
                          </a>
                        </nav>
                      </div>
                    </div>

                    <div
                      class="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** ${itemAnimNogroup()} ***"
                      data-xt-toggle-target
                      data-xt-group="cat-1">
                      <div class="xt-h5 flex items-center justify-between">
                        <div>Woman</div>
                        <button
                          type="button"
                          class="xt-button -mr-3.5 ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonTextAnim()}"
                          data-xt-toggle-element
                          data-xt-group="initial">
                          ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
                        </button>
                      </div>

                      <div class="-mx-3.5">
                        <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col">
                          <a
                            href="/"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                            Shirt
                          </a>
                          <a
                            href="/"
                            class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                            Pant
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
  </div>
`

export const object = {
  html: html,
  container: true,
}
