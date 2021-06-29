const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-reset-to-current">
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: ':scope > .xt-button', targets: ':scope > .xt-toggle' }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 1</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 2</button>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}">Target 0</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()} on current">Target 1</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}">Target 2</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
