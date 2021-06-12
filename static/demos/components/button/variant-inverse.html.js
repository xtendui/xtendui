const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="bg-primary-500 py-5 px-6">
      <div class="xt-list xt-list-3 items-center text-white xt-links-inverse">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} *** ${classes.buttonDefault()} ***"
        >
          Gray
        </button>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} *** ${classes.buttonPrimary()} ***"
        >
          Primary
        </button>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} *** text-white ${classes.buttonText()} ***"
        >
          Text
        </button>

        <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} *** xt-link ***">
          Link
        </button>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
