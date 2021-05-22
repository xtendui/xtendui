const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-drop="{ matches: { '(min-width: 768px)': { position: 'top-start' } } }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        drop
      </button>

      <div class="xt-drop p-4">
        <div class="xt-card w-64 py-3.5 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
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
  </div>
`

export const object = {
  html: html,
}
