const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop="{ position: 'left' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          left
        </button>

        <div class="xt-drop p-4" data-xt-drop-target>
          <div
            class="xt-card w-64 ${classes.dropGroupMd()} rounded${classes.dropCardRadius()} shadow-drop ${classes.cardWhite()}"
          >
            <nav class="xt-list flex-col">
              <a
                href="#"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Amet
              </button>
            </nav>
          </div>
          <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
        </div>
      </div>

      <div data-xt-drop="{ position: 'left-start' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          left start
        </button>

        <div class="xt-drop p-4" data-xt-drop-target>
          <div
            class="xt-card w-64 ${classes.dropGroupMd()} rounded${classes.dropCardRadius()} shadow-drop ${classes.cardWhite()}"
          >
            <nav class="xt-list flex-col">
              <a
                href="#"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Amet
              </button>
            </nav>
          </div>
          <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
        </div>
      </div>

      <div data-xt-drop="{ position: 'left-end' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          left end
        </button>

        <div class="xt-drop p-4" data-xt-drop-target>
          <div
            class="xt-card w-64 ${classes.dropGroupMd()} rounded${classes.dropCardRadius()} shadow-drop ${classes.cardWhite()}"
          >
            <nav class="xt-list flex-col">
              <a
                href="#"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Amet
              </button>
            </nav>
          </div>
          <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
        </div>
      </div>

      <div data-xt-drop="{ position: 'left', inset: true }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          left inset
        </button>

        <div class="xt-drop p-4" data-xt-drop-target>
          <div
            class="xt-card w-64 ${classes.dropGroupMd()} rounded${classes.dropCardRadius()} shadow-drop ${classes.cardWhite()}"
          >
            <nav class="xt-list flex-col">
              <a
                href="#"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Amet
              </button>
            </nav>
          </div>
          <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
        </div>
      </div>

      <div data-xt-drop="{ position: 'left-start', inset: true }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          left start inset
        </button>

        <div class="xt-drop p-4" data-xt-drop-target>
          <div
            class="xt-card w-64 ${classes.dropGroupMd()} rounded${classes.dropCardRadius()} shadow-drop ${classes.cardWhite()}"
          >
            <nav class="xt-list flex-col">
              <a
                href="#"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Amet
              </button>
            </nav>
          </div>
          <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
        </div>
      </div>

      <div data-xt-drop="{ position: 'left-end', inset: true }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          left end inset
        </button>

        <div class="xt-drop p-4" data-xt-drop-target>
          <div
            class="xt-card w-64 ${classes.dropGroupMd()} rounded${classes.dropCardRadius()} shadow-drop ${classes.cardWhite()}"
          >
            <nav class="xt-list flex-col">
              <a
                href="#"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
              >
                Amet
              </button>
            </nav>
          </div>
          <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
