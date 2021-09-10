const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle="{ targets: '#toggle--animation-inverse-0', duration: 500 }">
        Toggle 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle="{ targets: '#toggle--animation-inverse-1', duration: 500 }">
        Toggle 1
      </button>

      <div
        class="*** done:hidden *** ${classes.cardToggle()} w-full *** transition opacity-100 translate-x-0 on:opacity-0 on:translate-x-4 out:transition-none out:opacity-0 out:-translate-x-4 ***"
        id="toggle--animation-inverse-0"
        data-xt-duration-out="raf">
        Target 0
      </div>

      <div
        class="*** done:hidden *** ${classes.cardToggle()} w-full *** transition opacity-100 translate-x-0 on:opacity-0 on:translate-x-4 out:transition-none out:opacity-0 out:-translate-x-4 ***"
        id="toggle--animation-inverse-1"
        data-xt-duration-out="raf">
        Target 1
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
