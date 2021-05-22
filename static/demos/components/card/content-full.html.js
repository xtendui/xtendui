const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <div class="xt-card ${classes.cardRadius()} ${classes.cardDefaultFull()}">
          <div class="xt-media-container bg-gray-600 rounded-md xt-ratio-37.5">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
        </div>
      </div>

      <div class="w-full md:w-6/12">
        <div class="xt-card ${classes.cardRadius()} ${classes.cardDefaultFull()}">
          <div class="xt-media-container bg-gray-600 rounded-t-md xt-ratio-37.5">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
          <div class="text-base pt-6">
            <div class="xt-h4">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="xt-card ${classes.cardRadius()} ${classes.cardDefaultFull()}">
          <div class="${classes.cardMd()} rounded-md bg-gray-300">
            <div class="xt-h4">Lorem ipsum</div>
          </div>
          <div class="text-base pt-6">
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <div class="text-sm pt-6">
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
