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
          Small
        </button>
        <div class="xt-drop p-3" data-xt-drop-target>
          <div class="xt-card *** w-64 *** rounded${classes.dropCardRadius()} shadow-drop ${classes.dropCardDefault()}">
            <nav class="xt-list flex-col *** ${classes.groupMd()} ***">
              <a
                href="#"
                class="xt-button *** ${classes.groupButtonSm()} *** rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button *** ${classes.groupButtonSm()} *** rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button *** ${classes.groupButtonSm()} *** rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Amet
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          Medium
        </button>
        <div class="xt-drop p-3" data-xt-drop-target>
          <div class="xt-card *** w-80 *** rounded${classes.dropCardRadius()} shadow-drop ${classes.dropCardDefault()}">
            <nav class="xt-list flex-col *** ${classes.groupMd()} ***">
              <a
                href="#"
                class="xt-button *** ${classes.groupButtonMd()} *** rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button *** ${classes.groupButtonMd()} *** rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button *** ${classes.groupButtonMd()} *** rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Amet
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          Large
        </button>
        <div class="xt-drop p-3" data-xt-drop-target>
          <div class="xt-card *** w-96 *** rounded${classes.dropCardRadius()} shadow-drop ${classes.dropCardDefault()}">
            <nav class="xt-list flex-col *** ${classes.groupMd()} ***">
              <a
                href="#"
                class="xt-button *** ${classes.groupButtonLg()} *** rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button *** ${classes.groupButtonLg()} *** rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button *** ${classes.groupButtonLg()} *** rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Amet
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
