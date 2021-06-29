const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: ':scope > .xt-button', targets: ':scope > .xt-toggle', auto: { time: 4000, initial: false, step: 3, inverse: true } }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 1</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 2</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 3</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 4</button>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}">Target 0</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}">Target 1</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}">Target 2</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}">Target 3</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}">Target 4</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
