const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Mouseenter</div>

    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]', on: 'mouseenter', off: false }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 1</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 2</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 3</button>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 0</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 1</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 2</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 3</div>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Focus</div>

    <form class="text-sm">
      <div
        class="xt-list xt-list-3 items-center"
        data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]', on: 'focus', off: false }"
      >
        <input
          type="text"
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
          aria-label="Toggle 0"
          placeholder="Toggle 0"
          data-xt-toggle-el
        />

        <input
          type="text"
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
          aria-label="Toggle 1"
          placeholder="Toggle 1"
          data-xt-toggle-el
        />

        <input
          type="text"
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
          aria-label="Toggle 2"
          placeholder="Toggle 2"
        />

        <input
          type="text"
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
          aria-label="Toggle 3"
          placeholder="Toggle 3"
          data-xt-toggle-el
        />

        <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 0</div>

        <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 1</div>

        <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 2</div>

        <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 3</div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
