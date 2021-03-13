const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div class="xt-card ${classes.cardMd()} rounded-md ${classes.cardDefault()}">
      <div class="xt-h4">Lorem ipsum</div>
      <p>
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
        eget, vehicula scelerisque elit.
      </p>
    </div>
  </div>
`

export const object = {
  html: html,
}
