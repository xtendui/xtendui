const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ targets: '.xt-card', jump: true }">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 0
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 2
      </button>

      <div class="xt-card rounded-md ${classes.cardToggle()} transition">Target 0</div>

      <div class="xt-card rounded-md ${classes.cardToggle()} transition">Target 1</div>

      <div class="xt-card rounded-md ${classes.cardToggle()} transition">Target 2</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
