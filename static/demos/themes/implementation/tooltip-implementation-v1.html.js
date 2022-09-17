const classes = require('src/gatsby/templates/snippets/classes').classes

const itemAnim = () =>
  'transition duration-300 opacity-0 scale-95 group-in:opacity-100 group-in:scale-100 group-out:scale-105'
const itemAnimOpacity = () => 'opacity-0 transition-opacity ease-out-quint group-in:duration-300 group-out:duration-100'

const html = /* HTML */ `
  <div>
    <div class="max-w-4xl mx-auto">
      <div
        class="xt-card rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardWhite()}">
        <div data-xt-tooltip="{ mouseParent: true, duration: 500 }">
          Example tooltips

          <span>
            <a href="/" data-xt-tooltip-element>product informations</a>

            <div class="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
              <div
                class="*** xt-card w-80 rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} *** *** ${itemAnim()} ***">
                <div class="xt-list xt-list-1 flex-col py-2">
                  <div>
                    <div
                      class="*** xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap ${classes.groupButtonMd()} ***">
                      <div
                        class="*** p-2 bg-primary-800 rounded${classes.groupButtonRadius()} ${classes.textInverse()} ***">
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
                      class="*** xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap ${classes.groupButtonMd()} ***">
                      <div
                        class="*** p-2 bg-primary-800 rounded${classes.groupButtonRadius()} ${classes.textInverse()} ***">
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
                class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black *** ${itemAnimOpacity()} group-in:opacity-100 ***"></div>
            </div>
          </span>

          and

          <span>
            <a href="/" data-xt-tooltip-element>credit card CVV</a>

            <div class="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
              <div
                class="*** xt-card w-80 rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textDefault()} ${classes.cardWhite()} *** *** ${itemAnim()} ***">
                <div class="*** xt-media-container bg-gray-200 rounded-t${classes.tooltipRadius()} h-32 ***">
                  <img class="xt-media object-cover" src="/img.jpg" loading="lazy" alt="" />
                </div>
                <div>
                  <div
                    class="*** xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap ${classes.groupButtonMd()} ***">
                    <div
                      class="*** p-2 bg-primary-100 rounded${classes.groupButtonRadius()} ${classes.textInverse()} ***">
                      ${classes.iconCreditcard({ classes: 'xt-icon text-2xl text-primary-500' })}
                    </div>
                    <div class="text-xs">
                      The card security code is the three-digit number at the back of your debit card.
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** ${itemAnimOpacity()} group-in:opacity-100 ***"></div>
            </div>
          </span>
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
