const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          small
        </button>

        <div class="xt-drop p-4">
          <div class="xt-card w-64 py-3.5 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <nav class="xt-list flex-col">
              <a href="#" class="xt-button ${classes.buttonSmDrop()} ${classes.buttonDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="xt-button ${classes.buttonSmDrop()} ${classes.buttonDefaultDrop()}">
                Dolor sit
              </button>
              <button type="button" class="xt-button ${classes.buttonSmDrop()} ${classes.buttonDefaultDrop()}">
                Amet
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          medium
        </button>

        <div class="xt-drop p-4">
          <div class="w-80 py-3.5 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <nav class="xt-list flex-col">
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

      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          large
        </button>

        <div class="xt-drop p-4">
          <div class="w-96 py-3.5 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <nav class="xt-list flex-col">
              <a href="#" class="xt-button ${classes.buttonLgDrop()} ${classes.buttonDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="xt-button ${classes.buttonLgDrop()} ${classes.buttonDefaultDrop()}">
                Dolor sit
              </button>
              <button type="button" class="xt-button ${classes.buttonLgDrop()} ${classes.buttonDefaultDrop()}">
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
