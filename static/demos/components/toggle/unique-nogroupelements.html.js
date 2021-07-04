const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonToggle()}"
        data-xt-toggle="{ targets: '#toggle--unique-2, #toggle--unique-3', groupElements: false }"
      >
        Toggle
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonToggle()}"
        data-xt-toggle="{ targets: '#toggle--unique-2, #toggle--unique-3', groupElements: false }"
      >
        Toggle same
      </button>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" id="toggle--unique-2">Target 0</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" id="toggle--unique-3">Target 1</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
