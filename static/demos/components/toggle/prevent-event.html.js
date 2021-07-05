const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ min: 1, preventEvent: true }">
      <a href="/" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element> Toggle 0 </a>

      <a href="/" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element> Toggle 1 </a>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 0</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 1</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
