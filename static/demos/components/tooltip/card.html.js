const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-tooltip>
      <div data-xt-tooltip-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          Default
        </button>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div class="*** xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.dropCardDefault()} ***">
            <div class="xt-media-container bg-gray-300 rounded-t${classes.dropCardRadius()} pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
            <nav class="*** xt-list flex-col ${classes.groupMd()} ***">
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Amet
              </button>
            </nav>
            <div class="*** ${classes.cardSm()} rounded-b${classes.dropCardRadius()} border-t border-gray-300 ***">
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          Primary
        </button>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="*** xt-card w-64 rounded${classes.dropCardRadius()} shadow-tooltip ${classes.dropCardPrimary()} ***"
          >
            <div class="xt-media-container bg-gray-300 rounded-t${classes.dropCardRadius()} pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
            <nav class="*** xt-list flex-col ${classes.groupMd()} ***">
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonPrimary()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonPrimary()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonPrimary()}"
              >
                Amet
              </button>
            </nav>
            <div class="*** ${classes.cardSm()} rounded-b${classes.dropCardRadius()} border-t border-primary-300 ***">
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          Blur
        </button>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="*** xt-card w-64 rounded${classes.dropCardRadius()} shadow-tooltip ${classes.dropCardDefault()} ${classes.bgBlur()} ***"
          >
            <div class="xt-media-container bg-gray-300 rounded-t${classes.dropCardRadius()} pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
            <nav class="*** xt-list flex-col ${classes.groupMd()} ***">
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()} *** ${classes.bgBlurInner()} ***"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()} *** ${classes.bgBlurInner()} ***"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()} *** ${classes.bgBlurInner()} ***"
              >
                Amet
              </button>
            </nav>
            <div class="*** ${classes.cardSm()} rounded-b${classes.dropCardRadius()} border-t border-gray-300 ***">
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
