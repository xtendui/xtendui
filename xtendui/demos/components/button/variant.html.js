const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()} ***">
        Gray
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()} ***">
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** ${classes.buttonUpper()} ${classes.buttonTextAnim()} ***">
        Text
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** xt-link ***">
        Link
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
