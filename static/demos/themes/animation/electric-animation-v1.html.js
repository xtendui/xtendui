const classes = require('src/gatsby/templates/snippets/classes').classes

const grayDesign = () => `${classes.textDefault()} bg-gray-100`
const primaryDesign = () => `${classes.textInverse()} bg-primary-500`
const contentAnim = () => 'transition ease-in-out opacity-0 group-in:opacity-100 group-out:delay-150'
const itemAnimOpacity = () =>
  'opacity-0 transition-opacity ease-in-out opacity-0 group-in:delay-150 group-in:opacity-100'

const buttonGray = () => `${grayDesign()}`
const buttonPrimary = () => `${primaryDesign()}`
const buttonText = () => ``
const buttonGroupPrimary = () => `${classes.groupButtonPrimary()}`

const html = /* HTML */ `
  <div class="demo--electric-animation-v1">
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
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonText()}">
        Text
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} xt-link">
        Link
      </button>
    </div>

    <div class="${classes.hBlock()}">Toggle</div>

    <form class="text-sm">
      <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ duration: 650 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-toggle-element>
          Group
        </button>

        <div class="*** off:hidden out:pointer-events-none group *** max-w-sm" data-xt-toggle-target>
          <div class="*** relative rounded${classes.groupButtonRadius()} ***">
            <div class="*** anim-border ***"></div>
            <div class="xt-list flex-nowrap *** ${contentAnim()} ***">
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
      <div data-xt-drop="{ position: 'auto-end', duration: 650 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-drop-element>
          Nav
        </button>
        <div class="xt-drop p-3 *** group ***" data-xt-drop-target>
          <div class="*** relative rounded${classes.dropRadius()} ***">
            <div class="*** anim-border anim-border--inverse ***"></div>
            <div
              class="xt-card w-60 ${classes.textInverse()} rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.cardPrimary()} *** ${contentAnim()} ***">
              <nav aria-label="Drop" class="xt-list flex-col ${classes.groupMd()}">
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
          </div>
          <div
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-primary-500 *** ${itemAnimOpacity()} group-in:opacity-100 ***"></div>
        </div>
      </div>

      <div data-xt-drop="{ position: 'auto-end', duration: 650 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}"
          data-xt-drop-element>
          Contact
        </button>
        <div class="xt-drop p-3 *** group ***" data-xt-drop-target>
          <div class="*** relative rounded${classes.dropRadius()} ***">
            <div class="*** anim-border ***"></div>
            <div
              class="xt-card w-80 ${classes.textDefault()} rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.cardWhite()} *** ${contentAnim()} ***">
              <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col py-2">
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
              <div class="p-5 text-xs rounded-b${classes.dropRadius()} ${classes.cardWhiteAccent()} flex-auto">
                <p class="mb-1 font-bold text-sm">Didn&apos;t find what you was looking for?</p>
                <p>
                  Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at
                  <a href="mailto:info@info.com">info@info.com</a>.
                </p>
              </div>
            </div>
          </div>
          <div
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** ${itemAnimOpacity()} group-in:opacity-100 ***"></div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()}">Tooltip</div>

    <div data-xt-tooltip="{ mouseParent: true, duration: 650 }">
      Example tooltips

      <span>
        <a href="/" data-xt-tooltip-element>product informations</a>

        <div class="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
          <div class="*** relative rounded${classes.tooltipRadius()} ***">
            <div class="*** anim-border anim-border--inverse ***"></div>
            <div
              class="xt-card w-80 ${classes.textInverse()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.tooltipText()} ${classes.cardBlack()} *** ${contentAnim()} ***">
              <div class="xt-list xt-list-1 flex-col py-2">
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
          </div>
          <div
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black *** ${itemAnimOpacity()} group-in:opacity-100 ***"></div>
        </div>
      </span>

      and

      <span>
        <a href="/" data-xt-tooltip-element>credit card CVV</a>

        <div class="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
          <div class="*** relative rounded${classes.tooltipRadius()} ***">
            <div class="*** anim-border ***"></div>
            <div
              class="xt-card w-80 ${classes.textDefault()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.cardWhite()} *** ${contentAnim()} ***">
              <div class="xt-media-container bg-gray-200 rounded-t${classes.tooltipRadius()} h-32">
                <img class="xt-media object-cover" src="/img.jpg" loading="lazy" alt="" />
              </div>
              <div>
                <div
                  class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap ${classes.groupButtonMd()}">
                  <div class="p-2 bg-primary-100 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
                    ${classes.iconCreditcard({ classes: 'xt-icon text-2xl text-primary-500' })}
                  </div>
                  <div class="text-xs">
                    The card security code is the three-digit number at the back of your debit card.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** ${itemAnimOpacity()} group-in:opacity-100 ***"></div>
        </div>
      </span>

      <div class="${classes.hBlock()}">Card</div>

      <div class="xt-row xt-row-6">
        <div class="w-full md:w-6/12">
          <button
            type="button"
            class="xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
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
            class="xt-card rounded${classes.cardRadius()} ${classes.textInverse()} ${classes.cardPrimary()}">
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
  </div>
`

export const object = {
  html: html,
  container: true,
}
