const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list *** xt-list-8 ***">
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

      <a href="#" class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}">
        Back
      </a>

      <div data-xt-drop>
        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            Go to Page
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
                  Page 0
                </a>
                <a
                  href="#"
                  class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
                >
                  Page 1
                </a>
                <a
                  href="#"
                  class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
                >
                  Page 2
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
`

export const object = {
  html: html,
}
