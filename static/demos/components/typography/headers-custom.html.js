const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="*** ${classes.h1Display()} ***">Lorem ipsum dolor sit amet</div>

    <p>
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <div class="*** ${classes.h1()} ***">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

    <p>
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <div class="*** ${classes.h2()} ***">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

    <p>
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <div class="*** ${classes.h3()} ***">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

    <p>
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <div class="*** ${classes.h4()} ***">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

    <p>
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <div class="*** ${classes.h5()} ***">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

    <p>
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <div class="*** ${classes.h6()} ***">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

    <p>
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <div class="*** ${classes.hBlock()} text-black bg-gray-100 text-center ***">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </div>

    <p>
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>
  </div>
`

export const object = {
  html: html,
}
