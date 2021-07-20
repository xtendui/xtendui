const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--javascript-animation-js">
    <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}">
      Lorem ipsum
      <span
        class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 *** off:hidden out:pointer-events-none ***"
        data-xt-duration="1000"
        data-target
      >
        Active
      </span>
    </button>
  </div>
`

export const object = {
  html: html,
}
