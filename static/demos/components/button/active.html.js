const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()} xt-active">
        Gray
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()} xt-active">
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md text-black ${classes.buttonText()} xt-active"
      >
        Text
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md xt-link xt-active">Link</button>
    </div>
  </div>
`

export const object = {
  html: html,
}
