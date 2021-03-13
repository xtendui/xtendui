const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()} xt-disabled"
        aria-disabled="true"
      >
        Gray
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()} xt-disabled"
        aria-disabled="true"
      >
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md text-black ${classes.buttonText()} xt-disabled"
        aria-disabled="true"
      >
        Text
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md xt-link xt-disabled" aria-disabled="true">
        link
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
