const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <nav class="nav">
      <div class="xt-list flex-col max-w-sm">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-t-md ${classes.buttonPrimary()}">
          Lorem ipsum
        </button>

        <button type="button" class="xt-button ${classes.buttonMd()} active ${classes.buttonPrimary()}">
          dolor sit amet
        </button>

        <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonPrimary()}">
          consectetur adipiscing elit
        </button>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} disabled ${classes.buttonPrimary()}"
          aria-disabled="true"
        >
          Lorem ipsum
        </button>

        <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonPrimary()}">dolor sit amet</button>

        <button type="button" class="xt-button ${classes.buttonMd()} rounded-b-md ${classes.buttonPrimary()}">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </button>
      </div>
    </nav>
  </div>
`

export const object = {
  html: html,
}
