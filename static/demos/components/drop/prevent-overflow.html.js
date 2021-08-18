const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--drop-prevent-overflow">
    <div class="py-4 px-6 bg-primary-500" data-node-boundary>
      <div class="xt-list xt-list-3 items-center" data-node-drop>
        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            Drop
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

        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            Drop
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
  </div>
`

export const object = {
  html: html,
}
