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

          <div class="xt-drop p-3" data-xt-drop-target>
            <div class="xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.dropCardDefault()}">
              <nav class="xt-list flex-col ${classes.groupMd()}">
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
            </div>
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-gray-100"></div>
          </div>
        </div>

        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            Drop
          </button>

          <div class="xt-drop p-3" data-xt-drop-target>
            <div class="xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.dropCardDefault()}">
              <nav class="xt-list flex-col ${classes.groupMd()}">
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
            </div>
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-gray-100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
