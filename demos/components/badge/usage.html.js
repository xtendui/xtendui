const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="inline-block align-middle ${classes.badgeRadius()} ${classes.badgeMd()} ${classes.badgeDefault()}">
      Lorem ipsum
    </div>
  </div>
`

export const object = {
  html: html,
}
