const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ duration: 300, popperjs: false }" data-xt-mousefollow="{ classSkip: true }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-tooltip-element>
        mouse follow
      </button>

      <div
        class="*** xt-mousefollow fixed !-mt-1 !ml-4 *** xt-tooltip p-3 group"
        data-xt-tooltip-target
        data-xt-mousefollow-target>
        <div
          class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} *** transition duration-300 ease-in-out-quint opacity-0 translate-x-10 group-in:opacity-100 group-in:translate-x-0 ***">
          <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
