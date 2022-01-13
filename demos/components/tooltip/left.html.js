const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ mouseParent: true, position: 'left' }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-tooltip-element>
            left<br />...
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

      <div data-xt-tooltip="{ mouseParent: true, position: 'left-start' }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-tooltip-element>
            left start<br />...
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

      <div data-xt-tooltip="{ mouseParent: true, position: 'left-end' }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-tooltip-element>
            left end<br />...
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

      <div data-xt-tooltip="{ mouseParent: true, position: 'left', inset: true }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-tooltip-element>
            left inset<br />...
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

      <div data-xt-tooltip="{ mouseParent: true, position: 'left-start', inset: true }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-tooltip-element>
            left start inset<br />...
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

      <div data-xt-tooltip="{ mouseParent: true, position: 'left-end', inset: true }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-tooltip-element>
            left end inset<br />...
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
