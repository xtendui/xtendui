const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ duration: 300, popperjs: false }" data-xt-mousefollow>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-tooltip-element
      >
        mouse follow
      </button>

      <div class="*** xt-mousefollow fixed *** xt-tooltip p-3 group" data-xt-tooltip-target data-xt-mousefollow-target>
        <div
          class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()} -mt-1 ml-4 pointer-events-none transition duration-300 ease-in-out-quint opacity-0 translate-x-10 group-in:opacity-100 group-in:translate-x-0"
        >
          <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
