const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--javascript-animation">
    <button
      type="button"
      class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()} overflow-hidden"
    >
      Lorem ipsum
      <span
        class="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 *** off:hidden out:pointer-events-none transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        data-xt-duration="1000"
        data-node-target
      >
        Active
      </span>
    </button>
  </div>
`

export const object = {
  html: html,
}
