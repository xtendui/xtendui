const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]', min: 1, preventEvent: true }"
    >
      <a href="/" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el> Toggle 0 </a>

      <a href="/" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el> Toggle 1 </a>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 0</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 1</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
