const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div class="CCC--">
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-toggle="{ targets: '#toggle--unique-2, #toggle--unique-3', groupElements: true }"
      >
        Toggle
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-toggle="{ targets: '#toggle--unique-2, #toggle--unique-3', groupElements: true }"
      >
        Toggle same
      </button>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" id="toggle--unique-2">Target 0</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" id="toggle--unique-3">Target 1</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
