const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]', min: 1, on: 'mouseenter', off: 'mouseleave', preventEvent: true }"
    >
      <a href="/" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el> Toggle 1 hover </a>

      <a href="/" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el> Toggle 2 hover </a>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 1 hover</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 2 hover</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
