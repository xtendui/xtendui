const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div class="CCC--">
    <div class="xt-row xt-row-6">
      <div class="w-full">
        <div class="xt-card text-sm p-0 rounded-md my-5 xt-my-auto ${classes.cardDefaultFull()}">
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
        </div>
      </div>

      <div class="w-full">
        <div class="xt-card text-sm p-0 rounded-md my-5 xt-my-auto ${classes.cardPrimaryFull()}">
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
