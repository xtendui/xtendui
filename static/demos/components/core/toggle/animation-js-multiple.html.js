const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div class="CCC--toggle-animation-js-multiple">
    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 0
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1
      </button>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 0</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 1</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
