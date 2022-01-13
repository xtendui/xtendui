const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-disabled">
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ matches: { '(min-width: 768px)': { disabled: true } } }">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle-element>
        Toggle 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle-element>
        Toggle 1
      </button>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 0</div>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()} *** on ***" data-xt-toggle-target>
        <div
          class="xt-list xt-list-3 items-center"
          data-xt-toggle="{ elements: '[data-xt-toggle-element-nested]', targets: '[data-xt-toggle-target-nested]', min: 1 }">
          <button
            type="button"
            class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
            data-xt-toggle-element-nested>
            Toggle Nested 0
          </button>

          <button
            type="button"
            class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
            data-xt-toggle-element-nested>
            Toggle Nested 1
          </button>

          <div class="off:hidden out:pointer-events-none" data-xt-toggle-target-nested>Target Nested 0</div>

          <div class="off:hidden out:pointer-events-none" data-xt-toggle-target-nested>Target Nested 1</div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
