const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()}">Mouseenter</div>

    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ on: 'mouseenter', off: false }">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}"
        data-xt-toggle-element
      >
        Toggle 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}"
        data-xt-toggle-element
      >
        Toggle 1
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}"
        data-xt-toggle-element
      >
        Toggle 2
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}"
        data-xt-toggle-element
      >
        Toggle 3
      </button>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 0</div>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 1</div>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 2</div>

      <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 3</div>
    </div>

    <div class="${classes.hBlock()}">Focus</div>

    <form class="text-sm">
      <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ on: 'focus', off: false }">
        <input
          type="text"
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
          aria-label="Toggle 0"
          placeholder="Toggle 0"
          data-xt-toggle-element
        />

        <input
          type="text"
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
          aria-label="Toggle 1"
          placeholder="Toggle 1"
          data-xt-toggle-element
        />

        <input
          type="text"
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
          aria-label="Toggle 2"
          placeholder="Toggle 2"
        />

        <input
          type="text"
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
          aria-label="Toggle 3"
          placeholder="Toggle 3"
          data-xt-toggle-element
        />

        <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 0</div>

        <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 1</div>

        <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 2</div>

        <div class="off:hidden out:pointer-events-none ${classes.cardToggle()}" data-xt-toggle-target>Target 3</div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
