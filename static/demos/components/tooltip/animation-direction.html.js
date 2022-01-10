const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-tooltip="{ mouseParent: true, duration: 300, delay: 50 }">
      <div>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element>
          Tooltip
        </button>

        <div class="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
          <div
            class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} *** opacity-0 group-dir-before:translate-x-4 group-dir-after:-translate-x-4 group-in:transition group-in:duration-300 group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:duration-300 group-out:opacity-0 group-out-before:-translate-x-4 group-out-after:translate-x-4 ***">
            <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </div>

      <div>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element>
          Tooltip
        </button>

        <div class="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
          <div
            class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} *** opacity-0 group-dir-before:translate-x-4 group-dir-after:-translate-x-4 group-in:transition group-in:duration-300 group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:duration-300 group-out:opacity-0 group-out-before:-translate-x-4 group-out-after:translate-x-4 ***">
            <div class="${classes.tooltipMd()}">Consectetur adipiscing elit</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
