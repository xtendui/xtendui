const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ min: 1, on: 'mouseenter', off: 'mouseleave', preventEvent: true }"
    >
      <a
        href="/"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}"
        data-xt-toggle-element
      >
        Toggle 1 hover
      </a>

      <a
        href="/"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}"
        data-xt-toggle-element
      >
        Toggle 2 hover
      </a>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 1 hover</div>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 2 hover</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
