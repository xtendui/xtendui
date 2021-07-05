const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-tooltip="{ position: 'right' }">
      <div data-xt-tooltip-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          list
        </button>

        <div class="xt-tooltip p-2" data-xt-tooltip-target>
          <div class="xt-card w-64 py-3.5 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <nav class="*** xt-list flex-col ***">
              <a href="#" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                Dolor sit
              </button>
              <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
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
