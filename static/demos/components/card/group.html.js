const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
      <div class="xt-media-container bg-gray-200 rounded-t${classes.cardRadius()} h-40">
        <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
      </div>
      <div class="*** md:xt-card-group ***">
        <div class="${classes.cardMd()} *** md:w-7/12 *** bg-gray-100 md:rounded-bl${classes.cardRadius()}">
          <div class="xt-h4">Lorem ipsum</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
        </div>
        <div class="*** flex flex-col md:w-5/12 ***">
          <div class="*** flex-auto *** ${classes.cardSm()}">
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
          </div>
          <div
            class="${classes.cardSm()} ${classes.textDefault()} rounded-b${classes.cardRadius()} md:rounded-bl-none ${classes.cardWhiteAccent()}"
          >
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
