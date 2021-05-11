const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-card rounded-md ${classes.cardDefault()}" data-xt-mousefollow>
      <div class="${classes.cardMd()}">
        <div class="xt-h4">Default</div>
        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>
      </div>
      <span class="xt-mousefollow fixed xt-loader group">
        <span
          class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500 -mt-1 ml-4 transition opacity-0 group-in:opacity-100"
        >
          ${classes.spinner({ classes: 'animate-xt-spinner' })}
        </span>
      </span>
    </div>
  </div>
`

export const object = {
  html: html,
}
