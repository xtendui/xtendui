const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-prevent-event">
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ min: 1, preventEvent: true }">
      <a
        href="/"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle-element>
        Toggle 0
      </a>

      <a
        href="/"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle-element>
        Toggle 1
      </a>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 0</div>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 1</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
