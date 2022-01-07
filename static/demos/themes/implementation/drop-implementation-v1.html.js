const classes = require('src/gatsby/templates/snippets/classes').classes

const itemAnim = () => 'transition opacity-0 scale-95 group-in:opacity-100 group-in:scale-100 group-out:scale-105'
const itemAnimOpacity = () => 'opacity-0 transition-opacity ease-out-quint group-in:duration-300 group-out:duration-100'

const html = /* HTML */ `
  <div>
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
            class="xt-card w-60 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textInverse()} ${classes.cardPrimary()} *** ${itemAnim()} ***">
            <nav aria-label="Drop" class="xt-list flex-col ${classes.groupMd()}">
              <a
                href="/"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()}">
                ${classes.iconFile({ classes: 'xt-icon text-lg opacity-50 mr-2' })} Description
              </a>
              <a
                href="/"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()}">
                ${classes.iconFiletext({ classes: 'xt-icon text-lg opacity-50 mr-2' })} Features
              </a>
              <a
                href="/"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()}">
                ${classes.iconPackage({ classes: 'xt-icon text-lg opacity-50 mr-2' })} Accessories
              </a>
              <a
                href="/"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()}">
                ${classes.iconDownload({ classes: 'xt-icon text-lg opacity-50 mr-2' })} Manuals
              </a>
            </nav>
          </div>
          <div
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-primary-500 *** ${itemAnimOpacity()} group-in:opacity-100 ***"></div>
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
            class="xt-card w-80 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()} *** ${itemAnim()} ***">
            <nav aria-label="Drop" class="xt-list xt-list-1 flex-col *** py-2 ***">
              <a href="/" class="xt-button ${classes.groupButtonMd()} ${classes.buttonTextAnim()}">
                <div class="xt-list xt-list-3 *** flex-auto items-center justify-start text-left flex-nowrap ***">
                  <div class="p-2 bg-primary-100 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
                    ${classes.iconMail({ classes: 'xt-icon text-2xl text-primary-500' })}
                  </div>
                  <div>
                    <div class="font-medium">Email Us</div>
                    <div class="text-xs opacity-50">We&apos;ll respond within 24 hours.</div>
                  </div>
                </div>
              </a>
              <a href="/" class="xt-button ${classes.groupButtonMd()} ${classes.buttonTextAnim()}">
                <div class="xt-list xt-list-3 *** flex-auto items-center justify-start text-left flex-nowrap ***">
                  <div class="p-2 bg-primary-100 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
                    ${classes.iconPhone({ classes: 'xt-icon text-2xl text-primary-500' })}
                  </div>
                  <div>
                    <div class="font-medium">Phone</div>
                    <div class="text-xs opacity-50">Contact us on 24/7 support line.</div>
                  </div>
                </div>
              </a>
              <a href="/" class="xt-button ${classes.groupButtonMd()} ${classes.buttonTextAnim()}">
                <div class="xt-list xt-list-3 *** flex-auto items-center justify-start text-left flex-nowrap ***">
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
            <div class="*** p-5 text-xs rounded-b${classes.dropRadius()} ${classes.cardWhiteAccent()} flex-auto ***">
              <p class="mb-1 font-bold text-sm">Didn&apos;t find what you was looking for?</p>
              <p>
                Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at
                <a href="mailto:info@info.com">info@info.com</a>.
              </p>
            </div>
          </div>
          <div
            class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** ${itemAnimOpacity()} group-in:opacity-100 ***"></div>
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
