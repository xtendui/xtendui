const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="*** xt-card ***">
      <div class="*** ${classes.cardMd()} rounded-t-md ${classes.cardDefault()} ***">
        <div class="xt-h4">Lorem ipsum</div>
        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>
      </div>
      <div class="*** ${classes.cardSm()} rounded-b-md ${classes.cardPrimary()} ***">
        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
