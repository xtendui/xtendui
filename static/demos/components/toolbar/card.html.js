const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <div class="*** xt-card rounded${classes.dropCardRadius()} ${classes.cardDefault()} ***">
          <div class="xt-media-container bg-gray-300 rounded-t${classes.dropCardRadius()} pb-[37.5%]">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
          <nav class="xt-list xt-list-2 p-4">
            <div class="inline-flex mr-auto">
              <a
                href="#"
                class="xt-button ${classes.buttonMd()} rounded-l${classes.groupRadius()} ${classes.buttonDefault()}"
              >
                Clear
              </a>
              <a
                href="#"
                class="xt-button ${classes.buttonMd()} rounded-r${classes.groupRadius()} ${classes.buttonPrimary()}"
              >
                Submit
              </a>
            </div>

            <a
              href="#"
              class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
            >
              Back
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
          <nav class="xt-list xt-list-2 p-4">
            <div class="inline-flex mr-auto">
              <a
                href="#"
                class="xt-button ${classes.buttonMd()} rounded-l${classes.groupRadius()} ${classes.buttonDefault()}"
              >
                Clear
              </a>
              <a
                href="#"
                class="xt-button ${classes.buttonMd()} rounded-r${classes.groupRadius()} ${classes.buttonPrimary()}"
              >
                Submit
              </a>
            </div>

            <a
              href="#"
              class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
            >
              Back
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
