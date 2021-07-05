const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-class-custom">
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ class: 'on on--toggle-custom-class' }">
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()} on--toggle-custom-class" data-xt-toggle-element>
        Toggle 1
      </button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 2</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 3</button>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 0</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 1</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 2</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 3</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
