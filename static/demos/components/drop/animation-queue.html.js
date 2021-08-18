const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-drop="{ duration: 500 }">
      <div data-xt-drop-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          group
        </button>

        <div
          class="xt-drop p-4 *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-drop-target
        >
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
        </div>
      </div>

      <div data-xt-drop-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          card
        </button>

        <div
          class="xt-drop p-4 *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-drop-target
        >
          <div class="xt-card w-80 rounded${classes.dropCardRadius()} shadow-drop ${classes.cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
              ${classes.iconX()}
            </button>
            <div class="${classes.cardMd()}">
              <div class="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
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
