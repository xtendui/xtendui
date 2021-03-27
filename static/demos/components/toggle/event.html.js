const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()} rounded-md text-black bg-gray-200 text-center">Mouseenter</div>

    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ on: 'mouseenter', off: false }">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 0
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 2
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 3
      </button>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 0</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 1</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 2</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 3</div>
    </div>

    <div class="${classes.hBlock()} rounded-md text-black bg-gray-200 text-center">Focus</div>

    <form class="text-sm">
      <div
        class="xt-list xt-list-3 items-center"
        data-xt-toggle="{ elements: ':scope > input', on: 'focus', off: false }"
      >
        <input
          type="text"
          class="xt-input rounded-md ${classes.inputDefault()}"
          aria-label="Toggle 0"
          placeholder="Toggle 0"
        />

        <input
          type="text"
          class="xt-input rounded-md ${classes.inputDefault()}"
          aria-label="Toggle 1"
          placeholder="Toggle 1"
        />

        <input
          type="text"
          class="xt-input rounded-md ${classes.inputDefault()}"
          aria-label="Toggle 2"
          placeholder="Toggle 2"
        />

        <input
          type="text"
          class="xt-input rounded-md ${classes.inputDefault()}"
          aria-label="Toggle 3"
          placeholder="Toggle 3"
        />

        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 0</div>

        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 1</div>

        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 2</div>

        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 3</div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
