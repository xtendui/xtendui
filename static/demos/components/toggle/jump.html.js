const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ jump: true }">
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 1</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 2</button>

      <div class="${classes.cardToggle()} transition opacity-50 in:opacity-100" data-xt-toggle-target>Target 0</div>

      <div class="${classes.cardToggle()} transition opacity-50 in:opacity-100" data-xt-toggle-target>Target 1</div>

      <div class="${classes.cardToggle()} transition opacity-50 in:opacity-100" data-xt-toggle-target>Target 2</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
