const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()} in">
        Gray
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()} in">
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md text-black ${classes.buttonText()} in"
      >
        Text
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md xt-link in">Link</button>
    </div>
  </div>
`

export const object = {
  html: html,
}
