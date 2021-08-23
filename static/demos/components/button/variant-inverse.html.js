const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-card ${classes.cardMd()} rounded${classes.cardRadius()} ${classes.textInverse()} ${classes.cardPrimary()}"
    >
      <div class="xt-list xt-list-3 items-center ${classes.textInverse()}">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()} ***"
        >
          Gray
        </button>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()} ***"
        >
          Primary
        </button>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()} ***"
        >
          Gray Primary
        </button>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** ${classes.buttonUpper()} ${classes.buttonRing()} ${classes.buttonRingAnim()} ***"
        >
          Ring
        </button>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** text-white ${classes.buttonUpper()} ${classes.buttonTextAnim()} ***"
        >
          Text
        </button>

        <button type="button" class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** xt-link ***">
          Link
        </button>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
