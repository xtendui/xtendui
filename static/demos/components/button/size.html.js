const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button *** ${classes.buttonSm()} rounded${classes.buttonRadius()} *** ${classes.buttonPrimary()}"
      >
        Small
      </button>

      <button
        type="button"
        class="xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} *** ${classes.buttonPrimary()}"
      >
        Medium
      </button>

      <button
        type="button"
        class="xt-button *** ${classes.buttonLg()} rounded${classes.buttonRadius()} *** ${classes.buttonPrimary()}"
      >
        Large
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
