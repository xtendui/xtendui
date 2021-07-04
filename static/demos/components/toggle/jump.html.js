const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]', jump: true }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 1</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 2</button>

      <div
        class="${classes.cardToggle()} transition opacity-50 in:opacity-100"
        data-xt-toggle-tr
      >
        Target 0
      </div>

      <div
        class="${classes.cardToggle()} transition opacity-50 in:opacity-100"
        data-xt-toggle-tr
      >
        Target 1
      </div>

      <div
        class="${classes.cardToggle()} transition opacity-50 in:opacity-100"
        data-xt-toggle-tr
      >
        Target 2
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
