const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">button</button>
  </div>
`

export const object = {
  html: html,
}
