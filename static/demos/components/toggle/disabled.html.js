const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]', matches: { '(min-width: 768px)': { disabled: true } } }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 1</button>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>Target 0</div>

      <div class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()} *** on ***" data-xt-toggle-tr>
        <div
          class="xt-list xt-list-3 items-center"
          data-xt-toggle="{ elements: '[data-xt-toggle-el-nested]', targets: '[data-xt-toggle-tr-nested]', min: 1 }"
        >
          <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el-nested>
            Toggle Nested 0
          </button>

          <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el-nested>
            Toggle Nested 1
          </button>

          <div class="xt-toggle" data-xt-toggle-tr-nested>Target Nested 0</div>

          <div class="xt-toggle" data-xt-toggle-tr-nested>Target Nested 1</div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
