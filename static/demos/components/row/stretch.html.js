const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-4 *** xt-row-stretch ***">
      <div class="w-full md:w-6/12">
        <div class="xt-card rounded${classes.cardRadius()} ${classes.cardDefault()}">
          <div class="xt-media-container bg-gray-300 rounded-t${classes.cardRadius()} pb-[37.5%]">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <div class="${classes.cardMd()} mt-auto rounded-b${classes.cardRadius()} bg-gray-200">
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-6/12">
        <div class="xt-card rounded${classes.cardRadius()} ${classes.cardDefault()}">
          <div class="xt-media-container bg-gray-300 rounded-t${classes.cardRadius()} pb-[37.5%]">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
          </div>
          <div class="${classes.cardMd()} mt-auto rounded-b${classes.cardRadius()} bg-gray-200">
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
