const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="nav">
      <div class="*** xt-list flex-col max-w-sm ***">
        <button
          type="button"
          class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonPrimary()} *** rounded-t-md ***"
        >
          Lorem ipsum
        </button>

        <button
          type="button"
          class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonPrimary()} *** on ***"
        >
          dolor sit amet
        </button>

        <button
          type="button"
          class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonPrimary()}"
        >
          consectetur adipiscing elit
        </button>

        <button
          type="button"
          class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonPrimary()} disabled"
          aria-disabled="true"
        >
          Lorem ipsum
        </button>

        <button
          type="button"
          class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonPrimary()}"
        >
          dolor sit amet
        </button>

        <button
          type="button"
          class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonPrimary()} *** rounded-b-md ***"
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </button>
      </div>
    </nav>
  </div>
`

export const object = {
  html: html,
}
