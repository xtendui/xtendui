const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list *** xt-list-4 *** flex-col">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-t${classes.groupRadius()} ${classes.buttonDefault()}"
      >
        Lorem ipsum dolor sit amet
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonDefault()}">
        Consectetur adipiscing elit
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonDefault()}">Mauris mattis</button>

      <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonDefault()}">purus odio</button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-b${classes.groupRadius()} ${classes.buttonDefault()}"
      >
        Et dictum felis vestibulum sed
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
