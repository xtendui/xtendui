const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]', auto: { time: 4000, initial: false, step: 3, inverse: true } }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 1</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 2</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 3</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 4</button>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>Target 0</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>Target 1</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>Target 2</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>Target 3</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>Target 4</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
