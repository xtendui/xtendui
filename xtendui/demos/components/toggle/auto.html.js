const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ auto: { time: 4000, initial: false, step: 3, inverse: true } }">
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

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle-element>
        Toggle 2
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle-element>
        Toggle 3
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle-element>
        Toggle 4
      </button>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 0</div>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 1</div>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 2</div>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 3</div>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 4</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
