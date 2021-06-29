const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: ':scope > .xt-button', targets: ':scope > .target', jump: true }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 1</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 2</button>

      <div class="target ${classes.cardRadius()} ${classes.cardToggle()} transition opacity-50 in:opacity-100">
        Target 0
      </div>

      <div class="target ${classes.cardRadius()} ${classes.cardToggle()} transition opacity-50 in:opacity-100">
        Target 1
      </div>

      <div class="target ${classes.cardRadius()} ${classes.cardToggle()} transition opacity-50 in:opacity-100">
        Target 2
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
