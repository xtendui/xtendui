const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()} active">
        Gray
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()} active">
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md text-black ${classes.buttonText()} active"
      >
        Text
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md xt-link active">Link</button>
    </div>
  </div>
`

export const object = {
  html: html,
}
