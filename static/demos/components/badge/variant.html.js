const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div class="xt-badge ${classes.badgeMd()} ${classes.badgeDefault()}">Gray</div>

      <div class="xt-badge ${classes.badgeMd()} ${classes.badgePrimary()}">Primary</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
