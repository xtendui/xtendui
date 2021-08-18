const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          White
        </button>

        <div class="xt-drop p-4" data-xt-drop-target>
          <div class="*** xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.cardWhite()} ***">
            <div class="xt-media-container bg-gray-300 rounded-t${classes.dropCardRadius()} pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
            <nav class="*** xt-list flex-col ${classes.dropGroupMd()} ***">
              <a
                href="#"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()}  *** ${classes.dropButtonDefault()} ***"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()}  *** ${classes.dropButtonDefault()} ***"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()}  *** ${classes.dropButtonDefault()} ***"
              >
                Amet
              </button>
            </nav>
            <div
              class="*** ${classes.cardSm()} rounded-b${classes.dropCardRadius()} bg-gray-100 text-black xt-links-default ***"
            >
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          Primary
        </button>

        <div class="xt-drop p-4" data-xt-drop-target>
          <div class="*** xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.cardPrimary()} ***">
            <div class="xt-media-container bg-gray-300 rounded-t${classes.dropCardRadius()} pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
            <nav class="*** xt-list flex-col ${classes.dropGroupMd()} ***">
              <a
                href="#"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()}  *** ${classes.dropButtonPrimary()} ***"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()}  *** ${classes.dropButtonPrimary()} ***"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()}  *** ${classes.dropButtonPrimary()} ***"
              >
                Amet
              </button>
            </nav>
            <div
              class="*** ${classes.cardSm()} rounded-b${classes.dropCardRadius()} bg-gray-100 text-black xt-links-default ***"
            >
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          Blur
        </button>

        <div class="xt-drop p-4" data-xt-drop-target>
          <div
            class="*** xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.cardWhite()} bg-opacity-75 backdrop-filter backdrop-blur ***"
          >
            <div class="xt-media-container bg-gray-300 rounded-t${classes.dropCardRadius()} pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
            <nav class="*** xt-list flex-col ${classes.dropGroupMd()} ***">
              <a
                href="#"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()}  *** ${classes.dropButtonDefault()} ***"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()}  *** ${classes.dropButtonDefault()} ***"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()}  *** ${classes.dropButtonDefault()} ***"
              >
                Amet
              </button>
            </nav>
            <div
              class="*** ${classes.cardSm()} rounded-b${classes.dropCardRadius()} bg-gray-100 text-black xt-links-default ***"
            >
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
