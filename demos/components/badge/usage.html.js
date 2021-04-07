const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-badge ${classes.badgeMd()} ${classes.badgeDefault()}">Lorem ipsum</div>
  </div>
`

export const object = {
  html: html,
}
