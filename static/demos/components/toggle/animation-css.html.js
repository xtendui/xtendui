const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-animation">
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ duration: 500 }">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}"
        data-xt-toggle-element
      >
        Toggle 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}"
        data-xt-toggle-element
      >
        Toggle 1
      </button>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()} w-full" data-xt-toggle-target>
        Target 0
      </div>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()} w-full" data-xt-toggle-target>
        Target 1
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
