const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-animation-duration-delay">
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle-element
        data-xt-group="0"
      >
        Toggle 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle-element
        data-xt-group="1"
      >
        Toggle 1
      </button>

      <div
        class="off:hidden out:pointer-events-none ${classes.cardToggle()} w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        data-xt-toggle-target
        data-xt-group="0"
      >
        Target 0a
      </div>

      <div
        class="off:hidden out:pointer-events-none ${classes.cardToggle()} w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        data-xt-toggle-target
        data-xt-group="0"
      >
        Target 0b
      </div>

      <div
        class="off:hidden out:pointer-events-none ${classes.cardToggle()} w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        data-xt-toggle-target
        data-xt-group="0"
      >
        Target 0c
      </div>

      <div
        class="off:hidden out:pointer-events-none ${classes.cardToggle()} w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        data-xt-toggle-target
        data-xt-group="0"
      >
        Target 0d
      </div>

      <div
        class="off:hidden out:pointer-events-none ${classes.cardToggle()} w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        data-xt-toggle-target
        data-xt-group="1"
      >
        Target 1a
      </div>

      <div
        class="off:hidden out:pointer-events-none ${classes.cardToggle()} w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        data-xt-toggle-target
        data-xt-group="1"
      >
        Target 1b
      </div>

      <div
        class="off:hidden out:pointer-events-none ${classes.cardToggle()} w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        data-xt-toggle-target
        data-xt-group="1"
      >
        Target 1c
      </div>

      <div
        class="off:hidden out:pointer-events-none ${classes.cardToggle()} w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        data-xt-toggle-target
        data-xt-group="1"
      >
        Target 1d
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
