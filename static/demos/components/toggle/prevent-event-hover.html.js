const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: ':scope > .xt-button', targets: ':scope > .xt-toggle', min: 1, on: 'mouseenter', off: 'mouseleave', preventEvent: true }"
    >
      <a href="/" class="xt-button ${classes.buttonToggle()}"> Toggle 1 hover </a>

      <a href="/" class="xt-button ${classes.buttonToggle()}"> Toggle 2 hover </a>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}">Target 1 hover</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}">Target 2 hover</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
