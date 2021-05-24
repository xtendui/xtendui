const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-class-custom">
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: ':scope > .xt-button', targets: ':scope > .xt-toggle', class: 'on on--toggle-custom-class' }"
    >
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
      >
        Toggle 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()} on--toggle-custom-class"
      >
        Toggle 1
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
      >
        Toggle 2
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
      >
        Toggle 3
      </button>

      <div class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()}">Target 0</div>

      <div class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()}">Target 1</div>

      <div class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()}">Target 2</div>

      <div class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()}">Target 3</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
