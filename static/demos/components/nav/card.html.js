const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <div class="*** xt-card rounded${classes.dropCardRadius()} ${classes.cardDefault()} ***">
          <div class="xt-media-container bg-gray-300 rounded-t${classes.dropCardRadius()} pb-[37.5%]">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
          <nav class="xt-list flex-col ${classes.groupMd()}">
            <a
              href="#"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <a
              href="#"
              type="button"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
            >
              Dolor sit
            </a>
            <a
              href="#"
              type="button"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
            >
              Amet
            </a>
          </nav>
          <div class="*** ${classes.cardSm()} rounded-b${classes.dropCardRadius()} border-t border-gray-300 ***">
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-6/12">
        <div class="*** xt-card rounded${classes.dropCardRadius()} ${classes.cardPrimary()} ***">
          <div class="xt-media-container bg-gray-300 rounded-t${classes.dropCardRadius()} pb-[37.5%]">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
          <nav class="xt-list flex-col ${classes.groupMd()}">
            <a
              href="#"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonPrimary()}"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <a
              href="#"
              type="button"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonPrimary()}"
            >
              Dolor sit
            </a>
            <a
              href="#"
              type="button"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonPrimary()}"
            >
              Amet
            </a>
          </nav>
          <div class="*** ${classes.cardSm()} rounded-b${classes.dropCardRadius()} border-t border-primary-300 ***">
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
