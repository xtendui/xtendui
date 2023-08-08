const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ duration: 300 }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-tooltip-element>
        Tooltip
      </button>

      <div class="xt-tooltip p-3 group" data-xt-tooltip-target>
        <div class="*** relative ***">
          <div
            class="*** xt-design *** rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} bg-black *** transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***"></div>
          <div
            class="*** xt-card *** font-medium ${classes.textInverse()} *** transition duration-300 opacity-0 group-in:opacity-100 ***">
            <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
