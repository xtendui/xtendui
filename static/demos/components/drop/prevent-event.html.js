const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-drop="{ preventEvent: true }">
      <a href="#drop-with-link-0" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        drop
      </a>

      <div class="xt-drop p-4">
        <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${classes.cardWhite()}">
          <nav class="xt-list flex-col">
            <a href="#" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
              Dolor sit
            </button>
            <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">Amet</button>
          </nav>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
