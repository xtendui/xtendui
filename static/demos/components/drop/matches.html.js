const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-drop="{ matches: { '(min-width: 768px)': { position: 'top-start' } } }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-drop-element
      >
        drop
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
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
