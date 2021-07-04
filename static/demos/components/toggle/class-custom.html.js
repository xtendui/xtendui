const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-class-custom">
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]', class: 'on on--toggle-custom-class' }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()} on--toggle-custom-class" data-xt-toggle-el>
        Toggle 1
      </button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 2</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 3</button>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>Target 0</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>Target 1</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>Target 2</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>Target 3</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
