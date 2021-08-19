const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="bg-primary-500 py-5 px-6 *** ${classes.textWhite()} ***">
      <h2>Lorem Ipsum</h2>

      <p>
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
        eget, vehicula scelerisque elit.
      </p>

      <div class="bg-white py-5 px-6 *** ${classes.textBlack()} ***">
        <h2>Lorem Ipsum</h2>

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
