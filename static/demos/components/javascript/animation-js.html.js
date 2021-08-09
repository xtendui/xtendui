const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--javascript-animation-js">
    <button
      type="button"
      class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()} overflow-hidden"
    >
      Lorem ipsum
      <span
        class="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 *** off:hidden out:pointer-events-none ***"
        data-xt-duration="1000"
        data-js-target
      >
        Active
      </span>
    </button>
  </div>
`

export const object = {
  html: html,
}
