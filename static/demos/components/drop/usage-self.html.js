const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="*** xt-drop off:hidden out:pointer-events-none *** p-4 relative inline-block *** on ***" data-xt-drop="{ closeOutside: false }">
      <div class="xt-card w-64 py-3.5 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
        <nav class="xt-list flex-col">
          <a href="#" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
            Dolor sit
          </button>
          <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">Amet</button>
        </nav>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
