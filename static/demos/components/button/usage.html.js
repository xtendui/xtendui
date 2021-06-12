const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <button
      type="button"
      class="*** xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()} ***"
    >
      button
    </button>
  </div>
`

export const object = {
  html: html,
}
