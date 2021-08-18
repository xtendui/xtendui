const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()} on:z-drop"
          data-xt-drop-element
        >
          backdrop
        </button>

        <div class="xt-drop p-3" data-xt-drop-target>
          <div class="*** xt-backdrop z-below bg-black opacity-25 ***"></div>
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
          <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-white"></div>
        </div>
      </div>

      <div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave' }">
        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()} on:z-drop"
          >
            backdrop mouse
          </button>

          <div class="xt-drop p-3" data-xt-drop-target>
            <div class="*** xt-backdrop z-below bg-black opacity-25 ***"></div>
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
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
