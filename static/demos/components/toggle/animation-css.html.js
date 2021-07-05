const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-animation">
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ duration: 500 }">
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 1</button>

      <div class="target *** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 0</div>

      <div class="target *** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 1</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
