const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button *** ${classes.buttonSm()} ${classes.buttonRadius()} *** ${classes.buttonPrimary()}"
      >
        small
      </button>

      <button
        type="button"
        class="xt-button *** ${classes.buttonMd()} ${classes.buttonRadius()} *** ${classes.buttonPrimary()}"
      >
        medium
      </button>

      <button
        type="button"
        class="xt-button *** ${classes.buttonLg()} ${classes.buttonRadius()} *** ${classes.buttonPrimary()}"
      >
        large
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
