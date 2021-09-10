const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-animation-fast">
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ position: 'bottom', duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element>
          Tooltip
        </button>

        <div class="xt-tooltip p-3 group" data-xt-tooltip-target>
          <div
            class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
            <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'bottom' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element>
          Tooltip
        </button>

        <div class="xt-tooltip p-3 group" data-xt-tooltip-target>
          <div
            class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
            <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ position: 'bottom' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element>
          Tooltip
        </button>

        <div class="xt-tooltip p-3 group" data-xt-tooltip-target>
          <div
            class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
            <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </div>

      <div>
        <div class="xt-list xt-list-3 items-center" data-xt-tooltip="{ position: 'bottom', delay: 50 }">
          <div data-xt-tooltip-element>
            <button
              type="button"
              class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
              tooltip multiple
            </button>

            <div class="xt-tooltip p-3 group" data-xt-tooltip-target>
              <div
                class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
                <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
              </div>
            </div>
          </div>

          <div data-xt-tooltip-element>
            <button
              type="button"
              class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
              tooltip multiple
            </button>

            <div class="xt-tooltip p-3 group" data-xt-tooltip-target>
              <div
                class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
                <div class="${classes.tooltipMd()}">Consectetur adipiscing elit</div>
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
