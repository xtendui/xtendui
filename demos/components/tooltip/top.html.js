const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ mouseParent: true, position: 'top' }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-tooltip-element>
            top
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}">
              <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ mouseParent: true, position: 'top-start' }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-tooltip-element>
            top start
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}">
              <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ mouseParent: true, position: 'top-end' }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-tooltip-element>
            top end
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}">
              <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ mouseParent: true, position: 'top', inset: true }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-tooltip-element>
            top inset
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}">
              <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ mouseParent: true, position: 'top-start', inset: true }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-tooltip-element>
            top start inset
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}">
              <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ mouseParent: true, position: 'top-end', inset: true }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-tooltip-element>
            top end inset
          </button>

          <div class="xt-tooltip p-3" data-xt-tooltip-target>
            <div
              class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}">
              <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
