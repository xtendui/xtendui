const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <p>
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <div class="*** ${classes.h6()} md:xt-p ***">
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </div>

    <p class="*** text-10 mb-3 xt-mb-auto ***">
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <p class="*** text-11 mb-3 xt-mb-auto ***">
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <p class="*** text-12 mb-3 xt-mb-auto ***">
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <p class="*** text-13 mb-3 xt-mb-auto ***">
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <p class="*** text-sm mb-3 xt-mb-auto ***">
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <p class="*** text-base mb-3 xt-mb-auto ***">
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <p class="*** text-lg mb-3 xt-mb-auto ***">
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>

    <p class="*** text-xl mb-3 xt-mb-auto ***">
      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
      eget, vehicula scelerisque elit.
    </p>
  </div>
`

export const object = {
  html: html,
}
