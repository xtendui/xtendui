const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <div
          class="xt-card rounded${classes.cardRadius()} ${classes.textBlack()} ${classes.cardGray()}"
          data-xt-mousefollow
        >
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Default</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <span class="*** xt-mousefollow fixed *** xt-loader group" data-xt-mousefollow-target>
            <span
              class="${classes.spinner()} w-6 h-6 text-primary-500 -mt-1 ml-4 transition opacity-0 group-in:opacity-100"
            >
              ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
            </span>
          </span>
        </div>
      </div>

      <div class="w-full md:w-6/12">
        <div
          class="xt-card rounded${classes.cardRadius()} ${classes.textBlack()} ${classes.cardGray()}"
          data-xt-mousefollow="{ friction: false }"
        >
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Default</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <span class="*** xt-mousefollow fixed *** xt-loader group" data-xt-mousefollow-target>
            <span
              class="${classes.spinner()} w-6 h-6 text-primary-500 -mt-1 ml-4 transition opacity-0 group-in:opacity-100"
            >
              ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
